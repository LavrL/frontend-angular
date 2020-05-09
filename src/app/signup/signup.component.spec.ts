import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from '../../core/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { TranslateModule } from '@ngx-translate/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';

const appRoutes: Routes = [];

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let signupForm: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        TranslateModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        AngularFireAuthModule,
        ReactiveFormsModule
      ],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be called with "email" and "password" into "registerNewUser" function: ', () => {
    let value: { email: 'abc@email.com', password: '123' };
    let str: string = '22';

    spyOn(component, 'registerNewUser');
    component.registerNewUser(value);
    expect(component.registerNewUser).toHaveBeenCalledWith(value)
    expect(component.registerNewUser).toHaveBeenCalledTimes(1);
  });
})
