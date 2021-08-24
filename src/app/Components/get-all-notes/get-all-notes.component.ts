import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  constructor(private note: NoteService) {}
  @Input() notes: any = [];
  output: any;
  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes() {
    this.note.GetAllNotes('Notes').subscribe((response) => {
      console.log(response);
      this.output = response;
      this.notes = this.output.data;
      console.log(this.notes);
    });
  }
}
