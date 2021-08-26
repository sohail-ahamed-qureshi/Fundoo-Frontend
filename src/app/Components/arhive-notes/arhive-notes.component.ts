import { NoteService } from 'src/app/services/note-service/note.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arhive-notes',
  templateUrl: './arhive-notes.component.html',
  styleUrls: ['./arhive-notes.component.scss']
})
export class ArhiveNotesComponent implements OnInit {

  constructor(private noteSerive: NoteService) { }
  output: any;
  notes = [];
  
  ngOnInit(): void {
  this.GetAllArchivedNotes();  
  }

  GetAllArchivedNotes() {
    this.noteSerive.GetAllNotes('Notes/trash').subscribe((response) => {
      this.output = response;
      this.notes = this.output.data;
      console.log(this.notes);     
    });
  }

}
