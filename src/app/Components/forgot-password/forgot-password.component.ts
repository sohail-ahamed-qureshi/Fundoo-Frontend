import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!:FormGroup;
  submitted = false;
  durationInSeconds=3;
  output: any;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]
    })
  }

  get f(){
   return this.forgotPasswordForm.controls;
  }

  openSnackBar(message: string ){
    this._snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }

  OnSubmit(){
    this.submitted = true;
    if(this.forgotPasswordForm.invalid){
      return;
    }
    let requestpayload = {
      email : this.forgotPasswordForm.value.email
    }
    this.userService.ForgotPassword(requestpayload)?.subscribe(response =>{
      console.log(response);   
    this.output = response;
    this.openSnackBar(JSON.stringify(this.output.message));
    } , (err:any)=>{
      console.log(err);
      this.output = err;
      this.openSnackBar(JSON.stringify(this.output.error));
    }
    );
   
  }

}
