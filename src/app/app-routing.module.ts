import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { 
    path: 'calendar', 
    loadChildren: () => import('./calender/calender.module').then(m => m.CalendarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
