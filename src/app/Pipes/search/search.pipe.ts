import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any = [], filterString: string ) {
    if(filterString==null ){
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
