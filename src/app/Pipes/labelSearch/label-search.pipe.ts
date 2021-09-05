import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelSearch'
})
export class LabelSearchPipe implements PipeTransform {

  transform(value: any, filter: string) {
    if(filter.length == 0 || filter == null || filter == ''){
      return value;
    }
    const labels =[];
    for(const label of value){
      if(label.labelName.includes(filter)){
        labels.push(label);
      }
    }
    return labels;
  }

}
