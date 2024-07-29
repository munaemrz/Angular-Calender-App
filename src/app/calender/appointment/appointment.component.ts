import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {
  @Input() appointment!: Appointment;
  @Output() appointmentUpdated = new EventEmitter<Appointment>();
  @Output() deleteAppointment = new EventEmitter<Appointment>();

  onUpdate() {
    this.appointmentUpdated.emit(this.appointment);
  }

  onDelete() {
    this.deleteAppointment.emit(this.appointment);
  }
}
