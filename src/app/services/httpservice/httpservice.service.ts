import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  Login(url: any, data: any, token: any, headers: boolean) {
    //connection to backend  //https://localhost:44333/api +/User/Login
    if (url != null && data != null) {
      return this.http.post(this.baseUrl + url, data);
    }
    return null;
  }

  AddUser(url: any, data: any, token: any, headers: boolean) {
    if (url !== null) {
      return this.http.post(this.baseUrl + url, data);
    }
    return null;
  }

  ForgotPassword(url: any, data: any) {
    if (url !== null) {
      return this.http.post(this.baseUrl + url, data);
    }
    return null;
  }

  ResetPassword(url: any,  token: any,data: any) {
    if (url != null && token != null) {
      //passing token as headers
     var headersobject = new HttpHeaders().set("Authorization", "Bearer " + token);
      //passing headers in json format
      let httpOptions = {
        headers : headersobject
      }
      return this.http.put(this.baseUrl + url, data, httpOptions);
    }
    return null;
  }
}
