import { DialogContentComponent } from './../dialog-content/dialog-content.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  @Input() notes: any;
  backgroundColor:any;

  ngOnInit(): void {
  }

  bgColor(note:any){
    return {'bgred': note.color == "#e75f5f",
            'bgwhite': note.color == 'null' 
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
