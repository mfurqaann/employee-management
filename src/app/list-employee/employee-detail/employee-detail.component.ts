import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/login-employee/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  idEmployee: string;
  detailEmployee: Employee;
  employeeServiceSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idEmployee = params['id'];

      this.employeeServiceSubscription = this.employeeService
        .getEmployeeById(this.idEmployee)
        .subscribe((employeeDetail: Employee) => {
          this.detailEmployee = employeeDetail;
        });
    });
  }

  ngOnDestroy(): void {
    this.employeeServiceSubscription.unsubscribe();
  }

  get employeeFullName() {
    return this.detailEmployee?.firstName + ' ' + this.detailEmployee?.lastName;
  }

  get statusEmployee() {
    return this.detailEmployee?.status.toLowerCase();
  }

  get moreThanTwoWords() {
    return this.detailEmployee?.description.split(' ').length > 1;
  }
}
