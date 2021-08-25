import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  constructor(private note: NoteService) {}
  output: any;
  notes = [];
  message:any;
  ngOnInit(): void {
    this.GetAllNotes();
  }

  TriggerGetAllNotes($event:any){
    this.GetAllNotes();
    this.message=$event;
  }

  GetAllNotes() {
    this.note.GetAllNotes('Notes').subscribe((response) => {
      this.output = response;
      this.notes = this.output.data;
      console.log(this.notes);     
    });
  }
}
