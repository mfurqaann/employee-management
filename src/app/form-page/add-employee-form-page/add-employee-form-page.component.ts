import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/shared/employee.model';

import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-employee-form-page',
  templateUrl: './add-employee-form-page.component.html',
  styleUrls: ['./add-employee-form-page.component.scss'],
})
export class AddEmployeeFormPageComponent implements OnInit {
  title: string;
  selectedStatus: string;
  selectedGroup: string;
  groups: Array<string> = [];
  @ViewChild('f') formEmployee: NgForm;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.groups = [
      'IT',
      'HR',
      'Finance',
      'Marketing',
      'R&D',
      'Business Development',
      'Management',
      'Legal',
      'Customer Service',
      'General Administration',
    ];
  }

  onSubmit() {
    if (!this.formEmployee.valid) {
      return;
    }

    const employee: Employee = {
      id: 'dummy',
      username: this.formEmployee.value.username,
      firstName: this.formEmployee.value.firstname,
      lastName: this.formEmployee.value.lastname,
      email: this.formEmployee.value.email,
      birthDate: this.formEmployee.value.birthdate,
      basicSalary: this.formEmployee.value.basicsalary,
      status: this.selectedStatus,
      group: this.selectedGroup,
      description: this.formEmployee.value.description,
    };

    this.submitEmployee(employee);
  }

  private submitEmployee(employee: Employee) {
    this.employeeService.addNewEmployee(employee).subscribe(console.log);
  }
}
