import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CalendarComponent } from './calender.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

@NgModule({
  declarations: [AppointmentFormComponent],
  imports: [CommonModule, DragDropModule, FormsModule],
  exports: [],
})
export class CalendarModule {}
