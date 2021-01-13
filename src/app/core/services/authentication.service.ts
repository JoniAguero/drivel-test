import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../models';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private tokenSubject: BehaviorSubject<String>;
    public token: Observable<String>;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private router: Router) {
        this.tokenSubject = new BehaviorSubject<String>(JSON.parse(localStorage.getItem('token')));
        this.token = this.tokenSubject.asObservable();
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get tokenValue(): any {
        return this.tokenSubject.value;
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth`, { email, password })
            .pipe(map((user: User) => {
                localStorage.setItem('token', JSON.stringify(user.token));
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('role', JSON.stringify(user.role));
                this.tokenSubject.next(user.token);
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    register(name: string, email: string, password: string,  role: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/new`, { name, email, password, role })
            .pipe(map((user: User) => {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', JSON.stringify(user.token));
                localStorage.setItem('role', JSON.stringify(user.role));
                this.tokenSubject.next(user.token);
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        this.tokenSubject.next(null);
        this.currentUserSubject.next(null);
        this.router.navigate(['/login'])
    }
}