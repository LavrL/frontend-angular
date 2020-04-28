import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [];

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        TranslateModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        AngularFireAuthModule
      ],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be default language = RU', () => {
    expect(component.lang).toBe('RU');
  });

  it('should called onLogout()', () => {
    spyOn(component, 'onLogout');
    component.onLogout();
    expect(component.onLogout).toHaveBeenCalledTimes(1);
  });

  it('should called onTranslate()', () => {
    spyOn(component, 'onTranslate').and.callThrough();
    component.onTranslate();
    expect(component.onTranslate).toHaveBeenCalledTimes(1);
  });

});
