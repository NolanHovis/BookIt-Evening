import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/auth.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  errorMessage = null;
  authObservable: Observable<AuthResponse>;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  constructor(private authService: AuthService, private router: Router) { }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if (this.isLoginMode) {
      this.authObservable = this.authService.signIn(email, password);
    } else {
      this.authObservable = this.authService.signUp(email, password);
    }

    this.authObservable.subscribe(res => {
      console.log(res);
      this.errorMessage = null;
      this.router.navigate(['bookshelf']);
    }, (err) => {
      console.error('Auth Res ERROR:', err)
      this.errorMessage = err.message
    }
    );

    this.loginForm.reset();
  }

}
