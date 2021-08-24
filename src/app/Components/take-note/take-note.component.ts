import { NoteService } from 'src/app/services/note-service/note.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit, OnChanges {
  takeNote!:FormGroup;
  isCreated=false;
  isMoreOpen=false;
  isReminder=false;
  isArchive=false;
  isPin=false;
  isClose:boolean= true;
  isOpen:boolean= false;
  constructor(private formBuilder: FormBuilder, private noteService: NoteService) { }

  ngOnInit() {
    this.takeNote = this.formBuilder.group({
      title:['', Validators.required],
      description:['', [Validators.required,Validators.minLength(1)]],
    })
  }

  ngOnChanges(){
    this.AddNote()
  }

  AddNote(){
    this.isCreated = true;
    let reqPayload={
      title:this.takeNote.value.title,
      description:this.takeNote.value.description,
      archive:this.isArchive,
      isPin:this.isPin
    }
  
    this.noteService.CreateNote('Notes',reqPayload).subscribe(response=> {
      console.log(response);
    })
  }

}
