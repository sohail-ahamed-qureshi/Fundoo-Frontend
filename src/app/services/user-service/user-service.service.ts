import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import {HttpserviceService} from '../httpservice/httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpserviceService) { }

  loginUser(data: any){
    return this.httpService.Login('User/Login', data, null, false);
  }

  AddUser(data: any){
    return this.httpService.AddUser('User/Register', data, null, false);
  }

  ForgotPassword(data: any){
    return this.httpService.ForgotPassword('User/forgotpassword', data);
  }

  ResetPassword(token:any,data: any){
    return this.httpService.ResetPassword('User/resetpassword/'+token, token, data);
  }
}
