import { LabelService } from './../../services/label-service/label.service';
import { DataServiceService } from './../../services/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  labelName: any;
  label:any;
  notes:any;
  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataServiceService,
    private labelService: LabelService) {
    
  }

  ngOnInit() {
   this.dataService.rcvLabel.subscribe((response:any)=>{
     this.label=response;
     this.GetAllNotes();
   });
   this.GetAllNotes();
  }

  Refresh(event:any){
    this.GetAllNotes();
  }

  GetAllNotes(){
    this.labelService.GetLabeledNotes(this.label.labelId).subscribe((response:any)=>{
      this.notes=response.labels;
    });
  }
}
