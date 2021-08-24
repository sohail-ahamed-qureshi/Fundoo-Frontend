import { GetAllNotesComponent } from './../get-all-notes/get-all-notes.component';
import { NoteService } from 'src/app/services/note-service/note.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  takeNote!:FormGroup;
  isCreated=false;
  isMoreOpen=false;
  isReminder=false;
  isArchive=false;
  isPin=false;
  color:string="white";
  isClose:boolean= true;
  isOpen:boolean= false;
  getAllNotes = new GetAllNotesComponent(this.noteService);
  constructor(private formBuilder: FormBuilder, private noteService: NoteService,
    ) { }

  ngOnInit() {
    this.takeNote = this.formBuilder.group({
      title:['', Validators.required],
      description:['', [Validators.required,Validators.minLength(1)]],
    })
  }
  AddNote(){
    this.isCreated = true;
    if(this.takeNote.invalid){
      this.isOpen=!this.isOpen;
      return;
    }
    let reqPayload={
      title:this.takeNote.value.title,
      description:this.takeNote.value.description,
      isArchieve:this.isArchive,
      isPin:this.isPin,
      color:this.color,
      
    }
    this.isOpen=!this.isOpen;
    this.noteService.CreateNote('Notes',reqPayload).subscribe(response=> {
      console.log(response);
    });
    //calling get all notes method
    this.getAllNotes.GetAllNotes();
 
  }

}
