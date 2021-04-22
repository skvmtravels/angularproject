import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-usercancellations',
  templateUrl: './usercancellations.component.html',
  styleUrls: ['./usercancellations.component.css']
})
export class UsercancellationsComponent implements OnInit {

  constructor(private bookService:BookingServiceService) { }

  bookings:Booking[];
  userId:number;

  ngOnInit(): void {
    this.userId=Number(localStorage.getItem("userId"));
    this.bookService.viewBookingByFalseStatus(this.userId).subscribe(
      viewTrue=>{
        this.bookings=viewTrue;
      }
    );
  }

}
