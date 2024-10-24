import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(value: any, page: number, row: number) {
    const pages = row * (page - 1);
    return value.slice(pages, row * page);
  }
}
