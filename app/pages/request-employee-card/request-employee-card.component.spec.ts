import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEmployeeCardComponent } from './request-employee-card.component';

describe('RequestEmployeeCardComponent', () => {
  let component: RequestEmployeeCardComponent;
  let fixture: ComponentFixture<RequestEmployeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEmployeeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
