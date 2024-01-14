import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

import { Subscription } from 'rxjs';

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

    this.loadEventPaginator();
    this.searchTextInLocalStorage();
  }

  updateSearch() {
    localStorage.setItem('searchText', this.searchText);
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

  private loadEventPaginator() {
    this.handlePageEvent({
      pageIndex: 0,
      previousPageIndex: 0,
      pageSize: 5,
      length: 0,
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
