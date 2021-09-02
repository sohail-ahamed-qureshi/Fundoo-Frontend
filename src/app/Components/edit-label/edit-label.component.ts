import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  change=false;
  editable=false;
  labelForm!:FormGroup;
  error:string="";
  durationInSeconds=2;
  ngOnInit() {
    this.labelForm = this.formBuilder.group({
      newLabelName:['',[Validators.required, Validators.minLength(1)]]
    });
    this.dataService.recievedMessage.subscribe(response =>{
      this.labels=response;
    })

  }

  AddLabel(){
    if(this.labelForm.invalid){
        this.editable=false;
    }
    let reqPayLoad ={
      labelName: this.labelForm.value.newLabelName
    }
    this.labelService.CreateLabel(reqPayLoad).subscribe((response:any)=>{
      console.log(response);
      this.labelForm.controls['newLabelName'].setValue('');
      this.dataService.sendlabelMessage(response);
    },
    (error:any) =>{
      this.error=error.error.message;
      this.openSnackBar(this.error);
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
    });
  }


}
