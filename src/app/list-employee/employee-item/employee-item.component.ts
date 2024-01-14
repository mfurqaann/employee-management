import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
})
export class EmployeeItemComponent {
  @Input() employee: Employee;

  constructor(private router: Router) {}

  get employeeFullName() {
    return this.employee.firstName + ' ' + this.employee.lastName;
  }

  get employeeGroup() {
    return this.employee.group;
  }

  onDetailEmployee(id: string) {
    const queryParams = {
      id: id,
    };
    this.router.navigateByUrl(`list-employee/${id}`);
  }
}
