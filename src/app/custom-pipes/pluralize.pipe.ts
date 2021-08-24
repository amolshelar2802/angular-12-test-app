import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: number, object: string): string {
    
    if(value <= 1)
    {
      return value + " " + object;
    }
    else if(value > 1)
    {
      return value + " " + object + "s";
    }
    else
    {
      return "0 " + object + "s";
    }
    
    
  }

}
