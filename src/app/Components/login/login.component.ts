import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService} from '../../services/user-service/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showPwd:boolean = false;
  durationInSeconds=3;
  output: any;
  constructor(private formbuilder: FormBuilder, private userService: UserServiceService,
    private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  OnCheck(){
    this.showPwd= !this.showPwd;
  }

  openSnackBar(message: string ){
    this._snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }

  OnSignin() {
    // method on sign in
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let requestPayload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    //Call:user service login method
    this.userService.loginUser(requestPayload)?.subscribe(response => {
      this.output=response;
      localStorage.setItem('token', this.output.data);
      this.openSnackBar(JSON.stringify(this.output.message)
      );
      this.router.navigateByUrl("/home");
    } , (err:any)=>{
        this.openSnackBar(err);
      }
    );
  }
}
