import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeFormPageComponent } from './edit-employee-form-page.component';

describe('EditEmployeeFormPageComponent', () => {
  let component: EditEmployeeFormPageComponent;
  let fixture: ComponentFixture<EditEmployeeFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmployeeFormPageComponent]
    });
    fixture = TestBed.createComponent(EditEmployeeFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
