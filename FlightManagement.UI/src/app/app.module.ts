import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './layout/app.component';
import { FlightManagementModule } from './flightManagement/flightmanagement.module';
import { HeaderComponent } from './layout/header/header.component';
import { FlightListComponent } from './flightManagement/flight-list/flight-list.component';
import { from } from 'zen-observable';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FlightManagementModule,
    RouterModule.forRoot( [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: SearchComponent },
      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
