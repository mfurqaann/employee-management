import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employees/';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getEmployeeById(id: string) {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  getEmployeePaginate(start: number, end: number) {
    return this.http.get(`${this.baseUrl}?_start=${start}&_end=${end}`);
  }

  getSortDataBy(value: string) {
    return this.http.get(`${this.baseUrl}?_sort=${value}`);
  }

  addNewEmployee(employee: Employee) {
    const data = employee;
    return this.http.post(`${this.baseUrl}`, data);
  }

  editEmployee(id: string, employee: Employee) {
    const data = employee;
    return this.http.put(`${this.baseUrl}${id}`, data);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.baseUrl}${id}`);
  }
}
