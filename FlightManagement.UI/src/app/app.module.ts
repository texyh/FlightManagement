import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './layout/app.component';
import { FlightManagementModule } from './flightManagement/flightmanagement/flightmanagement.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlightManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
