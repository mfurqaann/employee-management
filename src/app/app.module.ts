import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSelectModule } from '@angular/material/select';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeItemComponent } from './list-employee/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './list-employee/employee-detail/employee-detail.component';
import { ToRupiahPipe } from './pipes/to-rupiah.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { AddEmployeeFormPageComponent } from './form-page/add-employee-form-page/add-employee-form-page.component';
import { EditEmployeeFormPageComponent } from './form-page/edit-employee-form-page/edit-employee-form-page.component';
import { EmployeeService } from './shared/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginEmployeeComponent,
    NavbarComponent,
    ListEmployeeComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
    ToRupiahPipe,
    SearchFilterPipe,
    AddEmployeeFormPageComponent,
    EditEmployeeFormPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
