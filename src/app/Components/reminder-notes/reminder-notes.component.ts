import { NoteService } from './../../services/note-service/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-notes',
  templateUrl: './reminder-notes.component.html',
  styleUrls: ['./reminder-notes.component.scss']
})
export class ReminderNotesComponent implements OnInit {

  notes=[];
  constructor(
    private noteSerive:NoteService
  ) { }

  ngOnInit(): void {
    this.GetAllReminderNotes();
  }

  GetAllReminderNotes() {
    this.noteSerive.GetAllNotes('Notes/Reminders').subscribe((response:any) => {
      this.notes = response.data;
      this.notes.reverse();   
    });
  }

}
