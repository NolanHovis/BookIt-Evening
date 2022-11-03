import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../models/auth.model";
import { User } from "../models/user.model";



const API_KEY = environment.fireBaseAPIKey;
const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser = new BehaviorSubject<User | null>(null);
    userToken: string = null;

    constructor(private http: HttpClient, private router: Router) { }

    signUp(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(SIGN_UP_URL + API_KEY, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            tap((res) => {
                this.handleAuth(res);
            })
        )
    }

    signIn(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(SIGN_IN_URL + API_KEY, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            tap(
                (res) => {
                    this.handleAuth(res);
                })
        )
    }

    signOut() {
        this.currentUser.next(null);
        this.router.navigate(['auth']);
    }

    private handleAuth(authData: AuthResponse) {
        const expDate = new Date(new Date().getTime() + +authData.expiresIn * 1000);
        const formUser = new User(authData.email, authData.localId, authData.idToken, expDate);
        this.currentUser.next(formUser);
        localStorage.setItem("userData", JSON.stringify(formUser));
    }

}