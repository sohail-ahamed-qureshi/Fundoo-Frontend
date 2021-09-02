import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from './../../services/data-service.service';
import { LabelService } from './../../services/label-service/label.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {

  constructor(private labelService: LabelService,
    private dataService: DataServiceService,
    @Inject(MAT_DIALOG_DATA) public labels: any) { }
  change=false;
  editable=false;
  labelForm!:FormGroup;
  ngOnInit() {

  }


}
