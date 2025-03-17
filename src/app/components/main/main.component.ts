import { Component } from '@angular/core';
import {HeadingComponent} from './heading/heading.component';
import {CalendarPlanComponent} from './calendar-plan/calendar-plan.component';
import {AddCalendarPlanComponent} from './add-calendar-plan/add-calendar-plan.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    HeadingComponent,
    CalendarPlanComponent,
    AddCalendarPlanComponent,
    NgForOf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true
})

export class MainComponent {
  public calendarPlanData = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11];
}

