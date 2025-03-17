import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalendarPlanComponent } from './add-calendar-plan.component';

describe('AddCalendarPlanComponent', () => {
  let component: AddCalendarPlanComponent;
  let fixture: ComponentFixture<AddCalendarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCalendarPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalendarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
