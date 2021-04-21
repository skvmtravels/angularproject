import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightServiceService } from '../flight-service.service';
import { SearchFlight } from '../search-flight';
import * as moment from 'moment';
import { BookingServiceService } from '../booking-service.service';
import { Booking } from '../booking';


@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.css']
})
export class SearchflightsComponent implements OnInit {

  searchFlight= new SearchFlight();
  booking=new Booking();
  // fromCity:string;
  // toCity:string;
  dateT:string;
  minDate = moment(new Date()).format('YYYY-MM-DD')
  maxDate ="2022-07-30"
  constructor(private service:FlightServiceService,private bookService:BookingServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  searchPlane():void{
    this.service.fromCityData=this.searchFlight.fromCity;
    this.service.toCityData=this.searchFlight.toCity;
    this.service.dateTdata=this.searchFlight.dateT;
    this.bookService.noOfPassengersData=this.booking.noOfPassengers;
    this.router.navigate(['/showSearchedFlights']);
    
    
    console.log(this.searchFlight.fromCity);
    console.log(this.searchFlight.toCity);
    console.log(this.searchFlight.dateT);
  }


  switchInput(fromCity:string,toCity:string){
    this.searchFlight.fromCity=toCity;
    this.searchFlight.toCity=fromCity;

  }

}
