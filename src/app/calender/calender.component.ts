import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalendarComponent {
  appointments: any[] = [
    {
      title: 'Meeting',
      date: new Date(2024, 6, 30),
      startTime: '10:00',
      endTime: '11:00',
    },
    {
      title: 'Doctor',
      date: new Date(2024, 6, 30),
      startTime: '15:00',
      endTime: '16:00',
    },
    {
      title: 'Lunch',
      date: new Date(2024, 6, 30),
      startTime: '12:00',
      endTime: '13:00',
    },
  ];
  selectedDay: Date | null = null;
  currentDate: Date = new Date();
  showAppointmentForm: boolean = false;

  getDaysArray(): number[] {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  }

  getAppointmentsForDay(day: number): any[] {
    return this.appointments.filter(
      (app) => new Date(app.date).getDate() === day
    );
  }

  openAppointmentForm(): void {
    this.showAppointmentForm = true;
  }

  closeForm(): void {
    this.showAppointmentForm = false;
  }

  createAppointment(appointment: any): void {
    this.appointments.push(appointment);
    this.showAppointmentForm = false;
  }

  selectDay(day: number): void {
    this.selectedDay = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      day
    );
  }

  deleteAppointment(appointment: any): void {
    this.appointments = this.appointments.filter((a) => a !== appointment);
  }

  onDateChange(event: any): void {
    this.currentDate = new Date(event.target.value);
  }

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const movedAppointment = event.container.data[event.currentIndex];
      const newDay = this.getDayFromContainerId(event.container.id);
      console.log('Moved appointment:', movedAppointment);
      console.log('New day:', newDay);
      movedAppointment.date = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        newDay
      );
    }
  }

  private getDayFromContainerId(containerId: string): number {
    return parseInt(containerId.split('-')[1], 10);
  }
}
