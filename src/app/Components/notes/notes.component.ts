import { DataServiceService } from './../../services/data-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  constructor(private note: NoteService,
    private dataservice: DataServiceService) {}
  output: any;
  notes = [];
  message: any;
  ngOnInit(): void {
    this.GetAllNotes();
    this.dataservice.recievedMessage.subscribe(response=>{
      console.log(response);
      this.GetAllNotes();
    })
  }

  Refresh(event: any) {
    this.message = event;
    this.GetAllNotes();
  }

  GetAllNotes() {
    this.note.GetAllNotes('Notes').subscribe((response) => {
      this.output = response;
      this.notes = this.output.data;
      console.log(this.notes);
    });
  }
}
