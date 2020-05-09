import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from '../core/auth-guard.service';
import { AuthService } from '../core/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './content/content.component';
import { DialogComponent } from './service-tab/dialog/dialog.component';
import { DialogDirective } from '../app/service-tab/dialog/dialog.directive';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListManagerModule } from './profile-tab/list-manager/list-manager.module';
import { NgModule } from '@angular/core';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ServiceTabComponent } from './service-tab/service-tab.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TodoListService } from './profile-tab/services/todo-list.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { environment } from '../environments/environment';

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
    ContentComponent,
    DialogComponent,
    DialogDirective,
    FooterComponent,
    HeaderComponent,
    ProfileTabComponent,
    ServiceTabComponent,
    SigninComponent,
    SignupComponent
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
    FormsModule,
    ReactiveFormsModule,
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
