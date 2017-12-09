import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightEntryComponent } from './flight-entry/flight-entry.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'flights', component: FlightListComponent },
    ])
  ],
  declarations: [FlightComponent, FlightListComponent, FlightEntryComponent]
})
export class FlightManagementModule { }
