import { DataServiceService } from './../../services/data-service.service';
import { NoteService } from 'src/app/services/note-service/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  output: any;
  notes = [];
  constructor(private note: NoteService,
    private dataservice: DataServiceService) { }

  ngOnInit(): void {
    this.GetAllNotes();
    this.dataservice.recievedMessage.subscribe(response=>{
      this.GetAllNotes();
    })
}

  GetAllNotes() {
    this.note.GetAllNotes('Notes/trash').subscribe((response) => {
      this.output = response;
      this.notes = this.output.data;
      console.log(this.notes);     
    });
  }

}
