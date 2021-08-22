
import { NotesComponent } from './Components/notes/notes.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { TakeNoteComponent } from './Components/take-note/take-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../app/authentication.guard'


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'signup', component:RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'resetpassword/:token', component: ResetpasswordComponent},
  {
    path: 'home', 
    component: DashboardComponent,
    canActivate:[AuthenticationGuard],
    children:[
      {
      path:'', 
      redirectTo:'notes',
      pathMatch:'full'
      },
      {
      path:'notes',
     component:NotesComponent
    }
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
