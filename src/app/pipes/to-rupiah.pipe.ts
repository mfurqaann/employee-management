import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRupiah',
})
export class ToRupiahPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);

    return formattedValue;
  }
}
