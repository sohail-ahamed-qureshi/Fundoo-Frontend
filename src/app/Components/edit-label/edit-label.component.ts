import { LabelService } from './../../services/label-service/label.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {

  constructor(private labelService: LabelService) { }
  labels:any;
  ngOnInit(): void {
    this.GetAllLabels();
  }

  GetAllLabels(){
    this.labelService.GetLabels("Notes/Labels").subscribe((response:any)=>{
    this.labels=response.labels;
    console.log(this.labels)
    })
  }

}
