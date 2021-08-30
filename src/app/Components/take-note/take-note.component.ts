import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note-service/note.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss'],
})
export class TakeNoteComponent implements OnInit {
  takeNote!: FormGroup;
  isCreated = false;
  isMoreOpen = false;
  isReminder = false;
  isArchive = false;
  isPin = false;

  white = "#ffffff";
  red = "#e75f5f";
  green = "#65e665";
  orange = "#e28011";
  pink = "#ee6ce3";
  gray = "#c3c0c086";
  purple = "#be7aeb";
  blue = "#5eadee";
  yellow = "#e7da65";
  color: any = this.white;
  isRed = false;
  isGreen = false;
  isYellow = false;
  isBlue = false;
  isOrange = false;
  isPurple = false;
  isGray = false;
  isPink = false;
  isWhite = false;
  isClose: boolean = true;
  isOpen: boolean = false;
  durationInSeconds = 3;
  output: any;
  @Output() messageEvent = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.takeNote = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }



  Color(code: any) {
    this.isRed = false;
    this.isGreen = false;
    this.isYellow = false;
    this.isBlue = false;
    this.isOrange = false;
    this.isPurple = false;
    this.isGray = false;
    this.isPink = false;
    this.isWhite = false;
    switch (code) {
      case this.red:
        this.isRed = !this.isRed;
        this.color = this.red;
        break;
      case this.green:
        this.color = this.green;
        this.isGreen = !this.isGreen;
        break;
      case this.yellow:
        this.color = this.yellow;
        this.isYellow = !this.isYellow;
        break;
      case this.blue:
        this.color = this.blue;
        this.isBlue = !this.isBlue;
        break;
      case this.orange:
        this.color = this.orange;
        this.isOrange = !this.isOrange;
        break;
      case this.purple:
        this.color = this.purple;
        this.isPurple = !this.isPurple;
        break;
      case this.pink:
        this.color = this.pink;
        this.isPink = !this.isPink;
        break;
      case this.gray:
        this.color = this.gray;
        this.isGray = !this.isGray;
        break;
      case this.white:
        this.color = this.white;
        this.isWhite = !this.isWhite;
        break;
    }
  }

  getColor() {
    return {
      'bg-red': this.isRed = this.isRed,
      'bg-green': this.isGreen = this.isGreen,
      'bg-yellow': this.isYellow = this.isYellow,
      'bg-white': this.isWhite = this.isWhite,
      'bg-blue': this.isBlue = this.isBlue,
      'bg-gray': this.isGray = this.isGray,
      'bg-purple': this.isPurple = this.isPurple,
      'bg-pink': this.isPink = this.isPink,
      'bg-orange':this.isOrange = this.isOrange
  }
  }



  AddNote() {
    this.isCreated = true;
    if (this.takeNote.invalid) {
      this.isOpen = !this.isOpen;
      this.isMoreOpen = false;
      this.isReminder = false;
      this.isArchive = false;
      this.isPin = false;
      this.takeNote.controls['title'].setValue('');
      this.takeNote.controls['description'].setValue('');
      return;
    }
    let reqPayload = {
      title: this.takeNote.value.title,
      description: this.takeNote.value.description,
      isArchieve: this.isArchive,
      isPin: this.isPin,
      color: this.color,
    };
    this.takeNote.controls['title'].setValue('');
    this.takeNote.controls['description'].setValue('');
    this.isOpen = !this.isOpen;
    this.noteService.CreateNote('Notes', reqPayload).subscribe(
      (response: any) => {
        this.output = response;
        this.openSnackBar("Note has been Created");
        this.messageEvent.emit(this.output);
      },
      (err) => {
        this.openSnackBar(err.message);
      }
    );
  }
}
