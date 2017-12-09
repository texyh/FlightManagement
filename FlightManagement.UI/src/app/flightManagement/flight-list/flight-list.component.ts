import { Component, OnInit } from '@angular/core';
import { Flight } from '../common/models/flight.model';
import { State } from '../common/models/state.model';
import { Courier } from '../common/models/courier.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor() { }

  date1 = new Date();

  date2: Date = new Date();
  state1 =  new State('', 'Lagos');
  state2 =  new State('', 'Abuja');
  state3 =  new State('', 'Kano');
  state4 =  new State('', 'Calabar');
  c1 =  new Courier('', 'AirPeace');
  c2 = new Courier('','Arik' )

  flights: Flight[] = [
    new Flight('', this.c1, this.state1, this.state2, this.date1, this.date2, 15000, 40000 ),
    new Flight('', this.c2, this.state3, this.state4, this.date1, this.date2, 20000, 40000 )
  ];

  ngOnInit() {
  }

}
