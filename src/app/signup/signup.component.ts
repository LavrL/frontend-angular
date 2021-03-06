import { AuthService } from '../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password_repeat: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, Validators.required),
    });
  }

  registerNewUser(value: { email: string, password: string }) {
    this.authService.doRegister(value).subscribe(
      () => { this.successMessage = 'Your account was created'; },
      err => { console.log(err); }
    );
    this.signupForm.reset();
  }

}
