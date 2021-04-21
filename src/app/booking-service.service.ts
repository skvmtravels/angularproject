import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  noOfPassengersData:number;
  seatData=[];

  constructor(private httpClient:HttpClient) { }

  addBooking(booking:Booking):Observable<Booking>{
    return this.httpClient.post<Booking>("http://localhost:9090/booking",booking);
  }

  addPassenger(passenger:Passenger):Observable<Passenger>{
    return this.httpClient.post<Passenger>("http://localhost:9090/addpassenger",passenger);
  }

  
}
