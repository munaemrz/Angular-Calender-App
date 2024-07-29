import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calender/calender.component';
import { AppointmentComponent } from './calender/appointment/appointment.component';

@NgModule({
  declarations: [AppComponent, CalendarComponent, AppointmentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
