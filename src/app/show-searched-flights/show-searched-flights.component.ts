import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightServiceService } from '../flight-service.service';
import { SearchFlight } from '../search-flight';

@Component({
  selector: 'app-show-searched-flights',
  templateUrl: './show-searched-flights.component.html',
  styleUrls: ['./show-searched-flights.component.css']
})
export class ShowSearchedFlightsComponent implements OnInit {

  flights:Flight[];
  searchF= new SearchFlight();
  // fromCity:string;
  // toCity:string;
  // dateT:string;

  constructor(private service:FlightServiceService) { }

  ngOnInit(): void {
    this.searchF.fromCity=this.service.fromCityData;
    this.searchF.toCity=this.service.toCityData;
    this.searchF.dateT=this.service.dateTdata;

    this.service.searchFlight(this.searchF).subscribe(
      showFlights=>{
        this.flights=showFlights;
        console.log(this.searchF.fromCity);
        console.log(this.searchF.toCity);
        console.log(this.searchF.dateT);
      }
    );
  }



}
