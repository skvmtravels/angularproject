import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { Flight } from './flight';
import { Passenger } from './passenger';
import { Seatmap } from './seatmap';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  noOfPassengersData:number;
  seatData=[];
  passengerIdData;
  flightNoData:number;
  bookingIdData:number;

  constructor(private httpClient:HttpClient) { }

  addBooking(booking:Booking):Observable<Booking>{
    return this.httpClient.post<Booking>("http://localhost:9090/booking",booking);
  }

  addPassenger(passenger:Passenger):Observable<Passenger>{
    return this.httpClient.post<Passenger>("http://localhost:9090/addpassenger",passenger);
  }

  addTicket(ticket:Ticket):Observable<Ticket>{
    return this.httpClient.post<Ticket>("http://localhost:9090/addTickets",ticket);
  }  

  // addSeat(seatmap:Seatmap):Observable<Seatmap>{
  //   return this.httpClient.post<Ticket>("http://localhost:9090/addSeats",seatmap);
  // }
  findFlightById(flight_no:number):Observable<Flight>{
    return this.httpClient.get<Flight>("http://localhost:9090/searchforbooking/"+flight_no);
  }

  findTicketByBookingId(booking_id:number):Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>("http://localhost:9090/searchticketforbooking/"+booking_id);
  }

  findPassByTicketId(ticket_id:number):Observable<Passenger>{
    return this.httpClient.get<Passenger>("http://localhost:9090/searchpassforbooking/"+ticket_id);
  }

  findPassByBookingId(booking_id:number):Observable<Passenger[]>{
    return this.httpClient.get<Passenger[]>("http://localhost:9090/searchpassforbookings/"+booking_id);
  }

  findTicketSeats(flight_no:number):Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>("http://localhost:9090/findSeats/"+flight_no);
  }
}
