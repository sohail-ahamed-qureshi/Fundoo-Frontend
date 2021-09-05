import { LabelService } from './../../services/label-service/label.service';
import { TrashNotesComponent } from './../trash-notes/trash-notes.component';
import { ArhiveNotesComponent } from './../arhive-notes/arhive-notes.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from './../../services/data-service.service';
import { NoteService } from './../../services/note-service/note.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {
  @Input() card: any;
  @Output() colorEvent = new EventEmitter<any>();
  labels:any;
  durationInSeconds = 3;
  isArchiveNotes = false;
  isDeleteNotes = false;
  showLabels=false;

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
  constructor(private noteService: NoteService,
    private dataService: DataServiceService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private labelService: LabelService) { }

    @Input() component:any;
    takeANote=false;
    GetAllNotes=false;
  ngOnInit(): void {
    if(this.component == "isTakeANote" ){
        this.takeANote=true;
        }
        else{
      this.GetAllNotes= true;
    }



    let route: any = this.activatedRoute.snapshot.component
    if (route == ArhiveNotesComponent) {
      this.isArchiveNotes = true;
    }
    if (route == TrashNotesComponent) {
      this.isDeleteNotes = true;
    }
    this.dataService.recievedMessage.subscribe((response:any)=>{
      this.labels=response;
    })
  }

  AddLabel(label:any){
    let reqpayLoad= {
      noteId: this.card.noteId,
      labelId:label.labelId
    } 
    this.labelService.TagLabel(reqpayLoad).subscribe((response)=>{
      this.dataService.send(response);
      
    }, error=>{
      this.openSnackBar(error.error.message);
    })
  }

  // pending
  CreateNewLabel(searchLabel:any){
    if(this.labels.length == 0){
      console.log(searchLabel)
    }
    
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
    if(this.takeANote){
      this.colorEvent.emit(this.color);
    }
    if(this.GetAllNotes){
      let colorData = {
        noteId: this.card.noteId,
        color: this.color,
        title:this.card.title,
        description:this.card.description
      }
      this.OnUpdate(colorData);
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
      'bg-orange': this.isOrange = this.isOrange
    }
  }


  OnUpdate(colorData:any) {
    this.noteService.UpdateNote('Notes', colorData).subscribe((response:any) => {
      this.dataService.sendMessage(response.data);
    },
      error => {
        this.openSnackBar(error.message);
      })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }

  Archive() {
    if(this.GetAllNotes){
      this.noteService.Archive('Notes/' + this.card.noteId + '/Archive').subscribe((response: any) => {
        this.dataService.sendMessage(response);
        this.openSnackBar(response.message)
      },
        error => {
          this.openSnackBar(error.message)
        }
      );
    }
    if(this.takeANote){
      // for take anotes
      console.log("clicked on archive in take a notes")
      this.isArchive= true;
    }
   
  }

  trashNote() {
    this.noteService.trashNote('Notes/' + this.card.noteId + '/trash').subscribe((response: any) => {
      this.dataService.sendMessage(response);
      this.openSnackBar(response.message)
    },
      error => {
        this.openSnackBar(error.message)
      }
    )
  }

  DeleteNote() {
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
