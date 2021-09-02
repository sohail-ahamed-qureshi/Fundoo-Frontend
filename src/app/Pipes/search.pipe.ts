import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterString: string ) {
    if(value.length <= 0 || filterString.length <= 0 ){
      return value;
    }
    const notes = [];
    for(const note of value){
      if(note.title.includes(filterString)||note.description.includes(filterString)){
        notes.push(note);
      }
    }
    return notes;
  }

}
