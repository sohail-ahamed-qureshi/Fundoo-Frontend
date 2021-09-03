import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpService: HttpserviceService) { }

  GetLabels(url: any) {
    return this.httpService.GetAllLabels(url);
  }

  CreateLabel(data: any) {
    return this.httpService.CreateLabel("Notes/Label", data);
  }

  DeleteLabel(data:any){
    return this.httpService.DeleteLabel("Notes/"+data+"/Label");
  }

}
