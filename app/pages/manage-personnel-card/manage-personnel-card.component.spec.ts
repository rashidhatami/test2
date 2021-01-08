import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePersonnelCardComponent } from './manage-personnel-card.component';

describe('ManagePersonnelCardComponent', () => {
  let component: ManagePersonnelCardComponent;
  let fixture: ComponentFixture<ManagePersonnelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePersonnelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePersonnelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
