import { Component, OnInit } from '@angular/core';
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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private rout: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
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

}
