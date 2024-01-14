import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.scss'],
})
export class LoginEmployeeComponent {
  constructor(private router: Router) {}

  @ViewChild('f') loginForm: NgForm;

  private login = {
    username: null,
    password: null,
  };

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.login = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };

    this.router.navigateByUrl('/list-employee');
  }
}
