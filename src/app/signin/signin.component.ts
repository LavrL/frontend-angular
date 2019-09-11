import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  userLogin(value) {
    this.authService.doLogin(value).then(
      res => {
        this.signinForm.reset();
        this.router.navigate(['/user']);
        console.log(res);
      },
      err => {
        console.log('Error - ' + err);
        this.errorMessage = 'Invalid username or password';
        console.log(this.errorMessage);
        this.signinForm.reset();
      }
    );
  }

  googleLogin() {
    this.authService.doGoogleLogin().then(
      res => {console.log(res); this.router.navigate(['/user']); },
      err => {console.log(err); }
    );
  }

  facebookLogin() {
    this.authService.doFacebookLogin().then(
      res => {console.log(res); this.router.navigate(['/user']); },
      err => {console.log(err); }
    );
  }
  twitterLogin() {
    this.authService.doTwitterLogin().then(
      res => { this.router.navigate(['/user']); },
      err => {console.log(err); }
    );
  }
}
