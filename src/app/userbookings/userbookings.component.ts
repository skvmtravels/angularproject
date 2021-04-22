import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Booking } from '../booking';
import { BookingServiceService } from '../booking-service.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-userbookings',
  templateUrl: './userbookings.component.html',
  styleUrls: ['./userbookings.component.css']
})
export class UserbookingsComponent implements OnInit {

  constructor(private bookService:BookingServiceService,private router:Router) { }

  bookings:Booking[];
  userId:number;
  ticket=new Ticket();
  tickets:Ticket[];
  i:number;
  prevDate = moment(new Date()).format('YYYY-MM-DD')

  ngOnInit(): void {
    this.bookService.deleteOldTickets().subscribe(
      dt=>{
        console.log(dt);
        location.reload();
      }
    );
    this.userId=Number(localStorage.getItem("userId"));
    this.bookService.viewBookingByTrueStatus(this.userId).subscribe(
      viewTrue=>{
        this.bookings=viewTrue;       
      }
    );
  }

  cancelticket(bookingId:number){
    
    this.bookService.cancelTickets(bookingId).subscribe(
      cancelbook=>{
        console.log(cancelbook);
        location.reload();
      }
    );
  }

  viewticket(bookingId:number){
    this.bookService.bookingIdForViewTicketData=bookingId;
    this.router.navigate(['/userViewTicketPage'])
  }

}
