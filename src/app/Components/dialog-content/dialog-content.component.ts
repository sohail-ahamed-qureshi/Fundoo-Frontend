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
  cardForm!:FormGroup;
  output:any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,
  private formBuilder: FormBuilder,
  private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      title:this.data.title,
      description: this.data.description
    })
  }

  OnUpdate(){
    let reqPayload= {
      noteId: this.data.noteId,
      title:this.cardForm.value.title,
      description:this.cardForm.value.description
    }
    this.noteService.UpdateNote('Notes', reqPayload).subscribe(response=> {
      this.output= response;
      this.messageEvent.emit(this.output.data);
    })
  }

}
