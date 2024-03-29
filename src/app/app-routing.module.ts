import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeDetailComponent } from './list-employee/employee-detail/employee-detail.component';
import { EmployeeFormPageComponent } from './form-page/employee-form-page/employee-form-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'list-employee/:id', component: EmployeeDetailComponent },
  {
    path: 'add-employee',
    component: EmployeeFormPageComponent,
    data: { edit: false },
  },
  {
    path: 'list-employee/edit/:id',
    component: EmployeeFormPageComponent,
    data: { edit: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
