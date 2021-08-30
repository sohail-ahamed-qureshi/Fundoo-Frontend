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

  white="#ffffff";
  red="#e75f5f";
  color:any=this.white;
  isRed=false;
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

  ColorRed(){
    this.isRed=true;
    this.color=this.red;
    console.log(this.color);
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
