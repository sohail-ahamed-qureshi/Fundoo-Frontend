
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

  UpdateNote(url: any, data:any){
    return this.http.UpdateNote(url,data);
  }

  Archive(url:any){
   return this.http.Archive(url);
  }

  trashNote(url:any){
    return this.http.trashNote(url);
  }
}
