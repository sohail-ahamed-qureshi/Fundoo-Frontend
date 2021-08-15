// import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'signup', component:RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  // {path: 'resetPassword', component: ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
