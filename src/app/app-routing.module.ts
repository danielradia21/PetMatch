import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './cmps/app-login/app-login.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';

const routes: Routes = [
 
  { path: '', component: AppHomeComponent },
    { path: 'login', component: AppLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
