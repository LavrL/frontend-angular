import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/auth.service';
import { UserTestComponent } from './user-test/user-test.component';
import { AuthGuard } from './core/auth-guard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContentComponent } from './content/content.component';
import { ServiceTabComponent } from './service-tab/service-tab.component';
import { DialogComponent } from './service-tab/dialog/dialog.component';
import { ListManagerModule } from './profile-tab/list-manager/list-manager.module';
import { TodoListService } from './profile-tab/services/todo-list.service';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogDirective } from '../app/service-tab/dialog/dialog.directive';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const appRoutes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'content', component: ContentComponent, canActivate: [AuthGuard] },
  { path: 'user', component: ContentComponent, canActivate: [AuthGuard] },
  { path: 'profile-tab', component: ProfileTabComponent, canActivate: [AuthGuard] },
  { path: 'service-tab', component: ServiceTabComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    UserTestComponent,
    ContentComponent,
    ProfileTabComponent,
    ServiceTabComponent,
    DialogComponent,
    DialogDirective
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    ListManagerModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthService, AuthGuard, TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
