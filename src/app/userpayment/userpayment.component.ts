import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styleUrls: ['./userpayment.component.css']
})
export class UserpaymentComponent implements OnInit {

  constructor(private bookService:BookingServiceService) { }

  ngOnInit(): void {
   console.log( this.bookService.seatData);
  }

}
