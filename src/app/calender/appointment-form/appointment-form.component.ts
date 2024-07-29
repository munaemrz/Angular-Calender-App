import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent {
  @Output() appointmentCreated = new EventEmitter<any>();
  @Output() closeForm = new EventEmitter<void>();

  createAppointment(formValue: any) {
    this.appointmentCreated.emit(formValue);
  }

  close() {
    this.closeForm.emit();
  }
}
