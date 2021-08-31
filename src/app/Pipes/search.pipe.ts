import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterString: string ) {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const notes = [];
    for(const note of value){
      if(note.title == filterString){
        notes.push(note);
      }
    }
    return notes;
  }

}
