import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatting',
})

export class DateFormattingPipe implements PipeTransform {
  transform(date: string): unknown {
    const formattedDate = date.split('T');
    return formattedDate;
  }
}
