import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doublepipe'
})
export class DoublepipePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return 2*value;
  }

}
