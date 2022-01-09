import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPageComponent } from './pages/user/user-page/user-page.component';
import { OrgComponent } from './pages/org/org.component';
import { OrgDashboardComponent } from './pages/org-dashboard/org-dashboard/org-dashboard.component';
const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: UserPageComponent },
  { path: 'submitorg', component: OrgComponent },
  { path: 'org', component: OrgDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
