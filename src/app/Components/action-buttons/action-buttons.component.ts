import { TrashNotesComponent } from './../trash-notes/trash-notes.component';
import { ArhiveNotesComponent } from './../arhive-notes/arhive-notes.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from './../../services/data-service.service';
import { NoteService } from './../../services/note-service/note.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {
  @Input() card: any;
  durationInSeconds = 3;
  isArchiveNotes=false;
  isDeleteNotes=false;
  constructor(private noteService: NoteService,
    private dataService: DataServiceService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let route:any =this.activatedRoute.snapshot.component
    if(route == ArhiveNotesComponent ){
      this.isArchiveNotes=true;
    }
    if(route== TrashNotesComponent){
      this.isDeleteNotes=true;
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }

  isArchive() {
    console.log(this.card.noteId);
    this.noteService.Archive('Notes/' + this.card.noteId + '/Archive').subscribe((response: any) => {
      this.dataService.sendMessage(response);
      this.openSnackBar(response.message)
    },
      error => {
        this.openSnackBar(error.message)
      }
    )
  }

  trashNote(){
    console.log(this.card.noteId);
    this.noteService.trashNote('Notes/' + this.card.noteId + '/trash').subscribe((response: any) => {
      this.dataService.sendMessage(response);
      this.openSnackBar(response.message)
    },
      error => {
        this.openSnackBar(error.message)
      }
    )
  }

  DeleteNote(){
    console.log(this.card.noteId);
    this.noteService.trashNote('Notes/' + this.card.noteId).subscribe((response: any) => {
      this.dataService.sendMessage(response);
      this.openSnackBar(response.message)
    },
      error => {
        this.openSnackBar(error.message)
      }
    )
  }

}
