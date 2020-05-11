import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from './recipebank.service';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {
  transform(value: IRecipe[], filterString : string): any {

    //console.log(value);

    if ( !filterString ) {
      return value;
    }

    let matches : string[] = [];
    for(let vally of value) {
      if(vally.name.toUpperCase().includes(filterString.toUpperCase())){
        //console.log(vally);
        matches.push(vally.name);
      }
    }
    return matches;
  }

}
