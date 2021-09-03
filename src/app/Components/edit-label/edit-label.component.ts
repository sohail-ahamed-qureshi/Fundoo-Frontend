import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public labels: any) { }
  change = false;
  editable = false;
  labelForm!: FormGroup;
  updateLabel:any;
  error: string = "";
  durationInSeconds = 2;
  ngOnInit() {
    this.labelForm = this.formBuilder.group({
      newLabelName: ['', [Validators.required, Validators.minLength(2)]]
    });
    this.dataService.recievedMessage.subscribe(response => {
      this.labels = response;
    });
    
  }

  AddLabel() {
    this.editable = false;
    if (this.labelForm.invalid) {
      return;
    }
    let reqPayLoad = {
      labelName: this.labelForm.value.newLabelName
    }
    this.labelService.CreateLabel(reqPayLoad).subscribe((response: any) => {
      console.log(response);
      this.labelForm.controls['newLabelName'].setValue('');
      this.dataService.sendlabelMessage(response);
    },
      (error: any) => {
        this.error = error.error.message;
        this.openSnackBar(this.error);
      })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }

  Cancel() {
    return this.labelForm.controls['newLabelName'].setValue('');
  }

  DeleteLabel(label: any) {
    this.editable = false;
    this.labelService.DeleteLabel(label.labelId).subscribe((response: any) => {
      this.dataService.sendlabelMessage(response);
      this.openSnackBar(response.message);
    })

  }

  BindValue(updateLabel:any){
    this.updateLabel=updateLabel;
  }

  UpdateLabel(label: any) {
    if(label.labelName == this.updateLabel){
      return;
    }
    let reqpayLoad = {
      labelId:label.labelId,
      labelName:this.updateLabel,
      userId:label.userId
    }
    this.labelService.UpdateLabel(reqpayLoad).subscribe((response:any)=>{
      this.dataService.sendlabelMessage(response);
      this.openSnackBar(response.message);
      this.editable=false;
    },
    error=>{
      this.openSnackBar(error.error.message);
    }
    )
      
  }


}
