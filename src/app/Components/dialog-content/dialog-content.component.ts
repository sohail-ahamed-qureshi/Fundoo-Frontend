import { DataServiceService } from './../../services/data-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note-service/note.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {
  cardForm!: FormGroup;
  output: any;
  durationInSeconds = 3;
  dateTime!: Date;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private _snackBar: MatSnackBar,
    private dataService: DataServiceService
  ) { }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      title: this.data.title,
      description: this.data.description
    }),
    this.dateTime = this.data.modifiedDate;
    
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }

  OnUpdate() {
    let reqPayload = {
      noteId: this.data.noteId,
      title: this.cardForm.value.title,
      description: this.cardForm.value.description
    }
    this.noteService.UpdateNote('Notes', reqPayload).subscribe(response => {
      this.output = response;
      this.openSnackBar(this.output.message);
      console.log(this.output.data);
      this.dataService.sendMessage(this.output.data);
    },
      error => {
        this.openSnackBar(error.message);
      })
  }

}
