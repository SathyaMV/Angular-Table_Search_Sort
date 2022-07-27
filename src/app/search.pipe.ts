import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any) {
    if(!args){
      return value;
    }
    return value.filter((val) => {
      let vals = (val.name.toLowerCase().includes(args)) || (val.skills.toLowerCase().includes(args));
      return vals;
    })
  }

}
