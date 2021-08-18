import { UserServiceService } from './../../services/user-service/user-service.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  heading!:FlexLayoutModule
  show = false;
  constructor(private formBuilder: FormBuilder, private userService : UserServiceService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]],
    });
  }
  get f() {
    return this.form.controls;
  }

  get error(){
    if(this.form.invalid){
      return true;
    }
    return false;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    let reqPayload = {
      firstName: this.form.value.firstName, 
      lastName: this.form.value.lastName, 
      email: this.form.value.email, 
      password: this.form.value.password, 
      confirmPassword: this.form.value.confirmpassword, 
    }
    return this.userService.AddUser(reqPayload)?.subscribe(response =>
      console.log(response),
      )
  }

  OnCheck(){
    this.show = !this.show;
  }

   passwordInput(){
    return this.form.get('password');
  }

   fxDevice(){
    if(this.heading === 'xs'){
        return true;
    }
    return false;
  }
   
}
