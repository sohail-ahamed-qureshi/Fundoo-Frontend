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
  createdDate!:Date;
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
    this.createdDate = this.data.createdDate;
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
      description: this.cardForm.value.description,
      color:this.data.color
    }
    this.noteService.UpdateNote('Notes', reqPayload).subscribe(response => {
      this.output = response;
      this.openSnackBar(this.output.message);
      this.dataService.sendMessage(this.output.data);
    },
      error => {
        this.openSnackBar(error.message);
      })
  }

  bgColor() {
    return {
      'bgred': this.data.color == "#e75f5f",
      'bgwhite': this.data.color == '#ffffff' || this.data.color == null,
      'bggreen': this.data.color == '#65e665',
      'bgyellow': this.data.color == '#e7da65',
      'bgpink': this.data.color == '#ee6ce3',
      'bgpurple': this.data.color == '#be7aeb',
      'bgorange': this.data.color == '#e28011',
      'bggray': this.data.color == '#c3c0c086',
      'bgblue': this.data.color == '#5eadee'
    }
  }

}
