import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Event, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
})
export class ListEmployeeComponent implements OnInit, OnDestroy {
  searchText: string;
  listEmployee: Array<Employee>;
  pageSize: number = 10;
  employeeSubscription: Subscription = new Subscription();
  textPlaceHolder: string = 'Search by username and group';
  selected: string;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeSubscription = this.employeeService
      .getEmployees()
      .subscribe((employees: Array<Employee>) => {
        this.listEmployee = employees;
      });

    this.searchTextInLocalStorage();
  }

  updateSearch() {
    localStorage.setItem('searchText', this.searchText);
  }

  onAddNewEmployee() {
    this.router.navigateByUrl('add-employee');
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.employeeService
      .getEmployeePaginate(0, this.pageSize)
      .subscribe((val: Array<Employee>) => {
        this.listEmployee = val;
      });
  }

  onSelectedSort(e: any) {
    const value = e.value;
    this.employeeService
      .getSortDataBy(value)
      .subscribe((response: Array<Employee>) => {
        this.listEmployee = response;
      });
  }

  private searchTextInLocalStorage() {
    const storedSearchText = localStorage.getItem('searchText');
    if (storedSearchText) {
      this.searchText = storedSearchText;
    }
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
  }
}
