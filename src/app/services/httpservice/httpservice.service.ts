import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  Post(url:any, data:any){
    console.log(data, url);
    return this.http.post(this.baseUrl + url, data)
  }

  Get(){}

  Put(){}

  Delete(){}
}
