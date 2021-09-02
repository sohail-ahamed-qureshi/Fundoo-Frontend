import { LabelService } from './../../services/label-service/label.service';
import { EditLabelComponent } from './../edit-label/edit-label.component';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnDestroy, OnInit {

  isExpandable:boolean = false;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 10}, (_, i) => ``);
  fillerContent = Array.from({length: 10}, () =>
   "");
   searchContent:string='';
  labels:any;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private rout: Router,
    private dataService: DataServiceService,
    private labelService: LabelService,
    public dialog: MatDialog ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }

  searchNotes(){
    this.dataService.SendEvent(this.searchContent);
  }

  ngOnInit(){
    this.dataService.recieveLabel.subscribe(response=>{
      this.GetAllLabels();
    });
    this.GetAllLabels();
  }

  GetAllLabels(){
    this.labelService.GetLabels("Notes/Labels").subscribe((response:any)=>{
    this.labels=response.labels;
    this.dataService.sendMessage(this.labels);
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  routeToReminder(){
    this.rout.navigateByUrl('home/reminder');
  }

  routeToHome(){
    this.rout.navigateByUrl('home');
  }

  routeToArchive(){
    this.rout.navigateByUrl('home/archive');
  }

  routeToTrash(){
    this.rout.navigateByUrl('home/trash');
  }

  openDialog(labels:any){
   let diaLogRef = this.dialog.open(EditLabelComponent, {
     data:labels
   });
   diaLogRef.afterClosed().subscribe()
  }

}
