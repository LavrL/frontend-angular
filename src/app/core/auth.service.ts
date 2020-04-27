import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
  loggedIn = false;
  token: string;
  lang = 'RU';

  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    public translate: TranslateService) {

    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  doRegister(value: { email: string, password: string }) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  doLogin(value: { email: string, password: string }): Observable<any> {
    return Observable.create((observer: any) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => {
          firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
          );
        
          observer.next(res);
          this.loggedIn = true;
        },
        err => {
          observer.next(err);
        }
      )
    })
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
          );
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
          );
          resolve(res);
        },
        err => {
          reject(err);
        });
    });
  }

  doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
          );
          resolve(res);
        },
        err => {
          reject(err);
        });
    });
  }

  doTranslate() {
    if (this.translate.currentLang === 'en') {
      this.translate.use('ru');
      this.lang = 'EN';
    } else {
      this.translate.use('en');
      this.lang = 'RU';
    }
  }

}
