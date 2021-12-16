import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private flightService: FlightService) {}

  ngOnInit() { }

  search(): void {
    this.flightService
    .find(this.from, this.to)
    .subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error:  (errResp) => {
        console.error('Error loading flights', errResp);
      }
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
