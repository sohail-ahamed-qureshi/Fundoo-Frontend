import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-get-all-trash',
  templateUrl: './get-all-trash.component.html',
  styleUrls: ['./get-all-trash.component.scss'],
})
export class GetAllTrashComponent implements OnInit {
  @Input() notes: any = [];
  output: any;
  constructor(private note: NoteService) {}

  ngOnInit(): void {
    this.GetAllTrashNotes();
  }
  GetAllTrashNotes() {
    this.note.GetAllTrashNotes('Notes/trash').subscribe((response) => {
      console.log(response);
      this.output = response;
      this.notes = this.output.data;
      console.log(this.notes);
    });
  }
}
