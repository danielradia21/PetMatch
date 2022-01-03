import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './pages/user/user-page/user-page.component';

const firebaseConfig = {
  apiKey: 'AIzaSyB7a_feWtkak89PZVSlm9HyoW1SMA1sdpk',
  authDomain: 'petmatch-c4cce.firebaseapp.com',
  projectId: 'petmatch-c4cce',
  storageBucket: 'petmatch-c4cce.appspot.com',
  messagingSenderId: '242131873251',
  appId: '1:242131873251:web:1ad23471d23a50852044d6',
  measurementId: 'G-8HG2P8NZ58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHomeComponent,

    AppFooterComponent,
    LoginComponent,
    SignupComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
