import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeFormPageComponent } from './add-employee-form-page.component';

describe('AddEmployeeFormPageComponent', () => {
  let component: AddEmployeeFormPageComponent;
  let fixture: ComponentFixture<AddEmployeeFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeFormPageComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
