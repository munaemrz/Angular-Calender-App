import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  showAppointmentForm: boolean = false;
  selectedDay: number | null = null;
  appointments: {
    date: number;
    title: string;
    startTime: string;
    endTime: string;
  }[] = [
    { date: 1, title: 'Meeting', startTime: '10:00 AM', endTime: '11:00 AM' },
    { date: 2, title: 'Doctor', startTime: '3:00 PM', endTime: '4:00 PM' },
    { date: 5, title: 'Lunch', startTime: '12:00 PM', endTime: '1:00 PM' },
  ];

  constructor() {}
  ngOnInit(): void {}

  onDateChange(event: any): void {
    const newDate = event.target.value;
    this.selectedDay = new Date(newDate).getDate();
  }

  openAppointmentForm(): void {
    this.showAppointmentForm = true;
  }

  selectDay(day: number): void {
    this.selectedDay = day;
  }

  getDaysArray(): number[] {
    const daysInMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    ).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  getAppointmentsForDay(
    day: number
  ): { date: number; title: string; startTime: string; endTime: string }[] {
    return this.appointments.filter((appointment) => appointment.date === day);
  }

  deleteAppointment(appointment: {
    date: number;
    title: string;
    startTime: string;
    endTime: string;
  }): void {
    this.appointments = this.appointments.filter((a) => a !== appointment);
  }

  createAppointment(event: any): void {
    const newAppointment = {
      date: event.date,
      title: event.title,
      startTime: event.startTime,
      endTime: event.endTime,
    };

    if (
      !newAppointment.date ||
      !newAppointment.title ||
      !newAppointment.startTime ||
      !newAppointment.endTime
    ) {
      console.error('Invalid appointment details', newAppointment);
      return;
    }

    this.appointments.push(newAppointment);
    this.appointments.sort((a, b) => a.date - b.date);
    this.closeForm();
  }

  closeForm(): void {
    this.showAppointmentForm = false;
  }

  drop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
}
