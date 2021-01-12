import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthenticationService } from '../core/services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const token = this.authenticationService.tokenValue;
        const role = localStorage.getItem('role');
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        
        if (token && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    'x-token': `${token}`,
                    'x-role': `${role}`,
                }
            });
        }

        return next.handle(request);
    }
}