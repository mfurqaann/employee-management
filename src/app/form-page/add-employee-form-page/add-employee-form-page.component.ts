import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-employee-form-page',
  templateUrl: './add-employee-form-page.component.html',
  styleUrls: ['./add-employee-form-page.component.scss'],
})
export class AddEmployeeFormPageComponent implements OnInit {
  readonly isEdit = !!this.route.snapshot.data['edit'];
  id: string;
  title: string;
  selectedStatus: string;
  selectedGroup: string;
  groups: Array<string> = [];
  @ViewChild('f') formEmployee: NgForm;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.isEdit) {
      this.title = 'Add Employee';
    } else {
      this.title = 'Edit Employee';
      this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
      });
    }

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
      id: '9999',
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

    if (this.isEdit) {
      this.editEmployee(this.id, employee);
    } else {
      this.submitEmployee(employee);
    }
  }

  private submitEmployee(employee: Employee) {
    this.employeeService.addNewEmployee(employee).subscribe();
    window.alert('Berhasil Menambahkan Employee');
    this.router.navigateByUrl('/list-employee');
  }

  private editEmployee(id: string, employee: Employee) {
    this.employeeService.editEmployee(id, employee).subscribe();
    window.alert('Berhasil Update Employee');
    this.router.navigateByUrl('/list-employee');
  }
}
