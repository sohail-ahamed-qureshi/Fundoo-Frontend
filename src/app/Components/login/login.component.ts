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

  OnSignin() {
    // method on sign in
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    console.log('login successful');
    console.log(JSON.stringify(this.loginForm.value, null));
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    this.userService.loginUser(this.loginForm.value).subscribe()

  }
}
