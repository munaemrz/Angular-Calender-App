import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent implements OnInit {
  @Output() appointmentCreated = new EventEmitter<any>();
  @Output() closeForm = new EventEmitter<void>();

  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.appointmentCreated.emit(this.appointmentForm.value);
    }
  }

  close(): void {
    this.closeForm.emit();
  }
}
