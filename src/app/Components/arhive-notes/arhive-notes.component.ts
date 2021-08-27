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
  output: any;
  notes = [];
  
  ngOnInit(): void {
  this.GetAllArchivedNotes();  
  this.dataservice.recievedMessage.subscribe(response=>{
    console.log(response);
    this.GetAllArchivedNotes();
  })
  }

  GetAllArchivedNotes() {
    this.noteSerive.GetAllNotes('Notes/Archive').subscribe((response) => {
      this.output = response;
      this.notes = this.output.data;
      console.log(this.notes);     
    });
  }

}
