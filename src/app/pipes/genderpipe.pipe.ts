import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    
    
      if (gender.toLowerCase() == "male") {
        return "Mr." + value;
      }
      else {
        return "Miss." + value;
      }
    return null;
  }

}
