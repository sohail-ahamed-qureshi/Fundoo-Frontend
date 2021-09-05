import { LabelService } from './../../services/label-service/label.service';
import { HttpserviceService } from './../../services/httpservice/httpservice.service';
import { DataServiceService } from './../../services/data-service.service';
import { DialogContentComponent } from './../dialog-content/dialog-content.component';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  constructor(public dialog: MatDialog,
     private dataService: DataServiceService,
     private labelService: LabelService) { }
  @Input() notes: any;
  @Output() event = new EventEmitter();
  removable=false;
  backgroundColor: any;
  searchWord: string = "";
  parentName="isGetAllNotes";
  ngOnInit(): void {
    this.dataService.recieveEvent.subscribe((result: any) => {
      this.searchWord = result;
    });
  }

  bgColor(note: any) {
    return {
      'bgred': note.color == "#e75f5f",
      'bgwhite': note.color == '#ffffff' || note.color == null,
      'bggreen': note.color == '#65e665',
      'bgyellow': note.color == '#e7da65',
      'bgpink': note.color == '#ee6ce3',
      'bgpurple': note.color == '#be7aeb',
      'bgorange': note.color == '#e28011',
      'bggray': note.color == '#c3c0c086',
      'bgblue': note.color == '#5eadee'
    }
  }

  openDialog(note: any) {
    let dialogRef = this.dialog.open(DialogContentComponent, {
      width: '600px',
      data: note,
      panelClass:'customDialog'
    });
    dialogRef.afterClosed().subscribe()
  }

  remove(label:any, note:any){
    let reqPayload = {
      noteId:note.noteId,
      labelId:label.labelId
    }
    this.labelService.DeleteLabelFromNote(reqPayload).subscribe((response:any)=>{
      this.event.emit(response);
    })
  }

  setVisible(label:any){
    this.removable=!this.removable;
  }
}
