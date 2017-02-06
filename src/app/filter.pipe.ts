import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './tasks/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

arr1:Task[]=[];
arr2:Task[]=[];
  transform(value: Task[], args: string): any {
   return value.filter(res=>res.Title.startsWith(args));
   // this.arr2=value.filter(res=>res.Status.startsWith(args));
    //return this.arr1.concat(this.arr2);
  }

}
