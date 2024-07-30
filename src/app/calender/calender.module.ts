import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import this
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CalendarComponent } from './calender.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

@NgModule({
  declarations: [CalendarComponent, AppointmentFormComponent],
  imports: [CommonModule, ReactiveFormsModule, DragDropModule],
  exports: [CalendarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarModule {}
