
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;

  GetAllNotes(url:any){
    this.http.get(this.baseUrl + url);
  }
}
