import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]
    })
  }

  get f(){
   return this.forgotPasswordForm.controls;
  }

  OnSubmit(){
    this.submitted = true;
    if(this.forgotPasswordForm.invalid){
      return;
    }
    let requestpayload = {
      email : this.forgotPasswordForm.value.email
    }
    this.userService.ForgotPassword(requestpayload)?.subscribe(response =>
      console.log(response));
  }

}
