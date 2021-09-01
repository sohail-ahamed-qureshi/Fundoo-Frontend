import { DataServiceService } from './../../services/data-service.service';
import { NoteService } from 'src/app/services/note-service/note.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arhive-notes',
  templateUrl: './arhive-notes.component.html',
  styleUrls: ['./arhive-notes.component.scss']
})
export class ArhiveNotesComponent implements OnInit {

  constructor(private noteSerive: NoteService,
    private dataservice: DataServiceService) { }
  notes = [];

  ngOnInit(): void {
    this.dataservice.recievedMessage.subscribe(response => {
      console.log(response)
      this.GetAllArchivedNotes();
    }),
    this.GetAllArchivedNotes();
  }

  GetAllArchivedNotes() {
    this.noteSerive.GetAllNotes('Notes/Archive').subscribe((response:any) => {
      this.notes = response.data;
    });
  }

}
