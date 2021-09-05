import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject([]);
  private eventSource = new BehaviorSubject([]);
  private labelsource = new BehaviorSubject([]);
  private label = new BehaviorSubject([]);
  private refresh = new BehaviorSubject([]);
  recievedMessage = this.messageSource.asObservable();
  recieveEvent = this.eventSource.asObservable();
  recieveLabel = this.labelsource.asObservable();
  rcvLabel = this.label.asObservable();
  refreshLabel = this.refresh.asObservable();
  constructor() { }

  sendMessage(message: any){
    this.messageSource.next(message);
  }

  SendEvent(event:any){
    this.eventSource.next(event);
  }

  sendlabelMessage(message:any){
    this.labelsource.next(message);
  }
  sendlabel(message:any){
    this.label.next(message);
  }

  send(message:any){
    this.refresh.next(message);
  }



}
