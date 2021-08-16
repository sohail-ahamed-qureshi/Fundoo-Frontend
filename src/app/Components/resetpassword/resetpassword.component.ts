import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(){
    this.resetPasswordForm = this.formBuilder.group({
      newPassword:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', [Validators.required]]
    })
  }

  get f(){
    return this.resetPasswordForm.controls;
  }

  OnSubmit(){
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }
    alert('SUCCESS \n\n' + JSON.stringify(this.resetPasswordForm.value, null));
  }

}
