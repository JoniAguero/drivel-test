import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';

import { AuthenticationService } from '../core/services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canLoad(){
        const token = this.authenticationService.tokenValue;
        if(token) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}