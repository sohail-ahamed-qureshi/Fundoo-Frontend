import { Injectable } from '@angular/core';
import {HttpserviceService} from '../httpservice/httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpserviceService) { }

  loginUser(data: any){
    console.log("data is", data)
    return this.httpService.Post('User/Login', data, null, false);
  }
}
