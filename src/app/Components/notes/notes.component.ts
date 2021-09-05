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
    private dataservice: DataServiceService) { }
  notes:any =[];
  ngOnInit(): void {
    this.GetAllNotes();
    this.dataservice.recievedMessage.subscribe(response => {
      this.GetAllNotes();
    });
    this.dataservice.refreshLabel.subscribe(response => {
      this.GetAllNotes();
    });
  }

  Refresh(event: any) {
    this.GetAllNotes();
  }


  GetAllNotes() {
    this.note.GetAllNotes('Notes').subscribe((response: any) => {
      this.notes = response.data;
      this.notes.reverse();
    });
  }


}
