import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[]{
    filterText = filterText?filterText.toLocaleLowerCase():""
     return filterText?value.
     filter((p:Car)=>p.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
   }
  }


