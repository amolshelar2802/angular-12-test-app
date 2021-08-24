import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullUserName'
})
export class FullUserNamePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string, args: string): string {
    return value  + " " + args;
  }

}
