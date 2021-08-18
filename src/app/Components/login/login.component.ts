import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService} from '../../services/user-service/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showPwd:boolean = false;
  constructor(private formbuilder: FormBuilder, private userService: UserServiceService) {}

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
      console.log(response)
    });
  }
}
