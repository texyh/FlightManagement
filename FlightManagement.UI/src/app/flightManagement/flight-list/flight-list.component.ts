import { Component, OnInit } from '@angular/core';
import { Flight } from '../common/models/flight.model';
import { State } from '../common/models/state.model';
import { Courier } from '../common/models/courier.model';
import { Apollo } from 'apollo-angular/Apollo';
import { ALL_FLIGHTS_QUERY } from '../common/graphqlQueries/flightQueries';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: ALL_FLIGHTS_QUERY
    })
    .valueChanges
    .subscribe((response) => {
      response.data['allFlights'].forEach(element => {
        const flight = new Flight();
        flight.fromDto(element);
        this.flights.push(flight);
      });
    });
  }

}
