import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isNullOrUndefined } from 'util';
@Injectable()
export class AuthService {
    constructor() { }

    public isAuthenticated(): boolean {
        const userInfo = localStorage.getItem('userInfo');
        // Check whether the token is expired and return
        // true or false
        return !isNullOrUndefined(userInfo) ? true : false;
    }
}