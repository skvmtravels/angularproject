import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightServiceService } from '../flight-service.service';
import { SearchFlight } from '../search-flight';

@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.css']
})
export class SearchflightsComponent implements OnInit {

  searchFlight= new SearchFlight();
  fromCity:string;
  toCity:string;
  constructor(private service:FlightServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  searchPlane():void{
    this.service.fromCityData=this.searchFlight.fromCity;
    this.service.toCityData=this.searchFlight.toCity;
    this.router.navigate(['/showSearchedFlights']);
    
    
    console.log(this.searchFlight.fromCity);
    console.log(this.searchFlight.toCity);
  }

}
