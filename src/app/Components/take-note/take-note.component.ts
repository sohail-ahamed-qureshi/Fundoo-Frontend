import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  isClose:boolean= true;
  isOpen:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

}
