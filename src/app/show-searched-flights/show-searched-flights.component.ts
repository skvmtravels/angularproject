import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-show-searched-flights',
  templateUrl: './show-searched-flights.component.html',
  styleUrls: ['./show-searched-flights.component.css']
})
export class ShowSearchedFlightsComponent implements OnInit {

  flights:Flight[];
  fromCity:string;
  toCity:string;

  constructor(private service:FlightServiceService) { }

  ngOnInit(): void {
    this.fromCity=this.service.fromCityData;
    this.toCity=this.service.toCityData;
    this.service.searchFlight(this.fromCity,this.toCity).subscribe(
      showFlights=>{
        this.flights=showFlights;
      }
    );
  }



}
