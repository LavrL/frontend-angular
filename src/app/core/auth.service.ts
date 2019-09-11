import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


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
  console.log('browserLang = ' + browserLang);
  translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
              }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => {
          firebase.auth().currentUser.getIdToken().then (
            (token: string) => this.token = token
          );
          console.log('res = ' + res);
          resolve(res); this.loggedIn = true; },
        err => { reject(err); }
      );
    });
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
  // return this.getToken() != null;
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
        firebase.auth().currentUser.getIdToken().then (
          (token: string) => this.token = token
        );
        resolve(res); console.log(res); } ,
      err => { reject(err); console.log(err); }
    );
  });
}

doFacebookLogin() {
  return new Promise<any>((resolve, reject) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(
      res => {
        firebase.auth().currentUser.getIdToken().then (
        (token: string) => this.token = token
      );
        resolve(res); },
      err => { console.log(err); reject(err);
      });
  });
}

doTwitterLogin() {
  return new Promise<any>((resolve, reject) => {
    const provider = new firebase.auth.TwitterAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(
      res => {
        firebase.auth().currentUser.getIdToken().then (
        (token: string) => this.token = token
      );
        resolve(res); },
      err => { console.log(err); reject(err);
      });
  });
}

doTranslate() {
  console.log('currentLang - ' + this.translate.currentLang);
  if (this.translate.currentLang === 'en') {
    this.translate.use('ru');
    this.lang = 'EN';
  } else {
    this.translate.use('en');
    this.lang = 'RU';
  }
}

}
