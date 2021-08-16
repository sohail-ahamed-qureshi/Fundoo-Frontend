import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

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
    alert('Success!! \n\n '+ JSON.stringify(this.forgotPasswordForm.value, null));
  }

}
