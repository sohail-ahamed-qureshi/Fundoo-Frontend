
import { HttpserviceService } from '../httpservice/httpservice.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpserviceService) { }

  GetAllNotes(url:any){
   return this.http.GetAllNotes( url);
  }

  CreateNote(url:any, data:any){
    return this.http.CreateNote(url,data);
  }
}
