import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from './Components/logo/logo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { TakeNoteComponent } from './Components/take-note/take-note.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NotesComponent } from './Components/notes/notes.component';
import {MatCardModule} from '@angular/material/card';
import { ReminderNotesComponent } from './Components/reminder-notes/reminder-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArhiveNotesComponent } from './Components/arhive-notes/arhive-notes.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GetAllArchiveComponent } from './Components/get-all-archive/get-all-archive.component';
import { GetAllTrashComponent } from './Components/get-all-trash/get-all-trash.component';
import { GetAllReminderComponent } from './Components/get-all-reminder/get-all-reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    GetAllNotesComponent,
    TakeNoteComponent,
    NotesComponent,
    ReminderNotesComponent,
    TrashNotesComponent,
    ArhiveNotesComponent,
    GetAllArchiveComponent,
    GetAllTrashComponent,
    GetAllReminderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
