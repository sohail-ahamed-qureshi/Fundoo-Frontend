import { LabelComponent } from './Components/label/label.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArhiveNotesComponent } from './Components/arhive-notes/arhive-notes.component';
import { ReminderNotesComponent } from './Components/reminder-notes/reminder-notes.component';
import { NotesComponent } from './Components/notes/notes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../app/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full',
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'reminder',
        component: ReminderNotesComponent,
      },
      {
        path: 'archive',
        component: ArhiveNotesComponent,
      },
      {
        path: 'trash',
        component: TrashNotesComponent,
      },
      {
        path: 'label/:labelName',
        component:LabelComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
