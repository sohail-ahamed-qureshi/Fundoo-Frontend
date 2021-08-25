import { NoteService } from 'src/app/services/note-service/note.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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
  color: string = 'white';
  isClose: boolean = true;
  isOpen: boolean = false;
  @Output() messageEvent= new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.takeNote = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(1)]],
    });
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
      (response) => {
        console.log(response);
      
      },
      (err) => {
        console.log(err);
      }
    );
    //calling get all notes method
    this.messageEvent.emit();
  }

  // trigger(){
  //   console.log("clicked");
  //   this.messageEvent.emit('running event');
  // }
}
