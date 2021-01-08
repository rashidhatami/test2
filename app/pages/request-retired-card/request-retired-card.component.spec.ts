import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRetiredCardComponent } from './request-retired-card.component';

describe('RequestRetiredCardComponent', () => {
  let component: RequestRetiredCardComponent;
  let fixture: ComponentFixture<RequestRetiredCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRetiredCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRetiredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
