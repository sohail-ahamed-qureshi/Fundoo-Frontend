import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  Post(url:any, data:any, token : any, headers: boolean){
    //get data and api uri
    console.log(data, url);
    //connection to backend  //https://localhost:44333/api +/User/Login
    return this.http.post(this.baseUrl + url, data);
  }

  Get(){}

  Put(){}

  Delete(){}
}
