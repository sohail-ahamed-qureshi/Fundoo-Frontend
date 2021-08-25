import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service/note.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  
  constructor(private note: NoteService, public dialog: MatDialog) {}
  @Input() notes:any;

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(#dialog);
  }
 
}
