import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../login-employee/shared/employee.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: Employee[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    // Pisahkan kata-kata dari searchText
    const searchTerms = searchText.toLowerCase().split(' ');

    // Filter items berdasarkan aturan AND
    return items.filter((item) =>
      searchTerms.every((term) =>
        ['username', 'group'].some((property) =>
          item[property].toString().toLowerCase().includes(term)
        )
      )
    );
  }
}
