import { DataServiceService } from './../../services/data-service.service';
import { DialogContentComponent } from './../dialog-content/dialog-content.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  constructor(public dialog: MatDialog, private dataService:DataServiceService) { }
  @Input() notes: any;
  backgroundColor: any;
  searchWord:string="";
  ngOnInit(): void {
    this.dataService.recieveEvent.subscribe((result:any) =>{
      this.searchWord=result;
    })
    }

  bgColor(note:any) {
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
      width: '500px',
      data: note
    });
    dialogRef.afterClosed().subscribe()
  }
}
