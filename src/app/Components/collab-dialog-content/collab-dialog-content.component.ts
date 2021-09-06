import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-collab-dialog-content',
  templateUrl: './collab-dialog-content.component.html',
  styleUrls: ['./collab-dialog-content.component.scss']
})
export class CollabDialogContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public card:any) { }

  ngOnInit(): void {
    
  }

}
