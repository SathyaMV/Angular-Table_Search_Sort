import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args: string, reverse: boolean = false): any[] {
    let sorted = value.sort((a,b) =>{
      if(a[args] > b[args]){
        return 1;
      }
      if(a[args] < b[args]){
        return -1;
      }
      return 0;
    })
    if (reverse) {
      return sorted.reverse();
    } else {
      return sorted;
    }
  }

}
