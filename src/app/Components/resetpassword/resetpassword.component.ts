import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = false;
  showPassword = false;
  token: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  OnCheck() {
    this.showPassword = !this.showPassword;
  }

  OnSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }
    let reqPayLoad ={
      newPassword : this.resetPasswordForm.value.newPassword,
      confirmPassword : this.resetPasswordForm.value.confirmPassword
    }
    this.token = this.activeRouter.snapshot.paramMap.get('token');
    if (this.token != null) {
      this.userService.ResetPassword(this.token, reqPayLoad)?.subscribe(res => console.log(res));
    }
  }
}
