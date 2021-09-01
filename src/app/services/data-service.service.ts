import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject([]);
  private eventSource = new BehaviorSubject([]);
  recievedMessage = this.messageSource.asObservable();
  recieveEvent = this.eventSource.asObservable();
  constructor() { }

  sendMessage(message: any){
    this.messageSource.next(message);
  }

  SendEvent(event:any){
    this.eventSource.next(event);
  }

}
