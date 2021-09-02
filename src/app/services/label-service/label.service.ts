import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor( private httpService: HttpserviceService) { }

GetLabels(url:any){
  return this.httpService.GetAllLabels(url);
}

}
