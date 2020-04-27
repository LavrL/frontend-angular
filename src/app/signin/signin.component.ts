import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  userLogin(value: { email: string, password: string }) {
    this.authService.doLogin(value).subscribe(
      res => {
        this.signinForm.reset();
        this.router.navigate(['/user']);
      },
      err => {
        this.errorMessage = 'Invalid username or password';
        this.signinForm.reset();
      }
    );
  }

  googleLogin() {
    this.ngZone.run(() => this.authService.doGoogleLogin().subscribe(
      res => { this.ngZone.run(() => this.router.navigate(['/user'])); },
      err => { console.log(err); }
    ));
  }

  facebookLogin() {
    this.ngZone.run(() => this.authService.doFacebookLogin().subscribe(
      res => { this.ngZone.run(() => this.router.navigate(['/user'])); },
      err => { console.log(err); }
    ));
  }

  twitterLogin() {
    this.ngZone.run(() => this.authService.doTwitterLogin().subscribe(
      res => { this.ngZone.run(() => this.router.navigate(['/user'])); },
      err => { console.log(err); }
    ));
  }
}
