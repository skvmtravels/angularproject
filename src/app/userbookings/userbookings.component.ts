import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Booking } from '../booking';
import { BookingServiceService } from '../booking-service.service';
import { Ticket } from '../ticket';
import { UserServiceService } from '../user-service.service';
import { Walletdto } from '../walletdto';

@Component({
  selector: 'app-userbookings',
  templateUrl: './userbookings.component.html',
  styleUrls: ['./userbookings.component.css']
})
export class UserbookingsComponent implements OnInit {

  constructor(private bookService:BookingServiceService,private router:Router,private userService:UserServiceService) { }

  bookings:Booking[];
  userId:number;
  ticket=new Ticket();
  tickets:Ticket[];
  walletdto=new Walletdto();
  refundMoney:number;
  tprice:number;
  nofpass:number;
  i:number;
  

  ngOnInit(): void {
    this.bookService.deleteOldTickets().subscribe(
      dt=>{
        console.log(dt);
        location.reload();
      }
    );
    this.userId=Number(localStorage.getItem("userId"));
    this.walletdto.user_id=Number(localStorage.getItem("userId"));
    this.bookService.viewBookingByTrueStatus(this.userId).subscribe(
      viewTrue=>{
        this.bookings=viewTrue;       
      }
    );
  }

  cancelticket(bookingId:number){
    this.bookService.findBookinfById(bookingId).subscribe(
      findBook=>{
        this.nofpass=findBook.noOfPassengers;
        console.log(this.nofpass);
      }
    );
    this.bookService.findFlightByBookingId(bookingId).subscribe(
      findFlight=>{
        this.tprice=findFlight.ticketPrice;
        console.log(this.tprice);
      }
    );
    
      

      
      

      setTimeout( ()=>{
        this.walletdto.wallet=this.nofpass*this.tprice;      
      
        console.log(this.walletdto.wallet);
        this.userService.rechargeWallet(this.walletdto).subscribe(
          recharge=>{
            console.log(recharge);
          }
        );

        this.bookService.cancelTickets(bookingId).subscribe(
          cancelbook=>{
            
            console.log(cancelbook);
            location.reload();
          }
        );
        
        }, 100)
    
  }

  viewticket(bookingId:number){
    this.bookService.bookingIdForViewTicketData=bookingId;
    this.router.navigate(['/userViewTicketPage'])
  }

}
