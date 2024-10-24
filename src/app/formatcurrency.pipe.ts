import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatcurrency',
})
export class FormatcurrencyPipe implements PipeTransform {
  transform(value: number) {
    if (value >= 1000 && value < 1000000) {
      const val = value / 1000;
      return val.toFixed(1) + 'k';
    } else if (value >= 1000000) {
      const val = value / 1000000;
      return val.toFixed(1) + 'm';
    } else {
      return value.toString();
    }
  }
}
