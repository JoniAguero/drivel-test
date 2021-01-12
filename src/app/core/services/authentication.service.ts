import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private tokenSubject: BehaviorSubject<String>;
    public token: Observable<String>;

    constructor(private http: HttpClient) {
        this.tokenSubject = new BehaviorSubject<String>(JSON.parse(localStorage.getItem('token')));
        this.token = this.tokenSubject.asObservable();
    }

    public get tokenValue(): any {
        return this.tokenSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<String>(`${environment.apiUrl}/auth`, { email, password })
            .pipe(map((user: any) => {
                localStorage.setItem('token', JSON.stringify(user.token));
                localStorage.setItem('role', JSON.stringify(user.role));
                this.tokenSubject.next(user.token);
                return user;
            }));
    }

    register(name: string, email: string, password: string,  role: string) {
        return this.http.post<String>(`${environment.apiUrl}/auth/new`, { name, email, password, role })
            .pipe(map((user: any) => {
                localStorage.setItem('token', JSON.stringify(user.token));
                localStorage.setItem('role', JSON.stringify(user.role));
                this.tokenSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.tokenSubject.next(null);
    }
}