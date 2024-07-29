import { Component, Input } from '@angular/core';
import { Appointment } from '../appointment.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent {
  updateAppointment($event: Appointment) {
    throw new Error('Method not implemented.');
  }
  deleteAppointment($event: Appointment) {
    throw new Error('Method not implemented.');
  }
  @Input() dayNumber: number = 0;
  @Input() appointments: Appointment[] = [];

  drop(event: CdkDragDrop<Appointment[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
}
