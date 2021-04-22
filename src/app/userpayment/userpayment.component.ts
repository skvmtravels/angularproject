import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';
import { FlightServiceService } from '../flight-service.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styleUrls: ['./userpayment.component.css']
})
export class UserpaymentComponent implements OnInit {

  ticket=new Ticket();
  i:number;

  constructor(private bookService:BookingServiceService,private flightService:FlightServiceService,private router:Router) { }

  ngOnInit(): void {
   console.log( this.bookService.seatData);
  }

  payment():void{
    
    for(this.i=0;this.i<this.bookService.noOfPassengersData;this.i++){
      this.ticket.seatNo=this.bookService.seatData[this.i];
      this.ticket.travelDate=this.flightService.dateTdata;
      this.ticket.booking_id=this.bookService.bookingIdData;
      this.ticket.flight_no=this.bookService.flightNoData;
      this.ticket.passenger_id=this.bookService.passengerIdData-this.i;
      console.log(this.bookService.passengerIdData-this.i)
      this.ticket.bookingStatus=true;
      this.bookService.addTicket(this.ticket).subscribe(
        addTick=>{
          console.log(this.bookService.bookingIdData);
          console.log(this.bookService.flightNoData);
          console.log(this.flightService.dateTdata);
          if(addTick){
            this.router.navigate(['/userTicketPrintPage'])
          }
          
          
          console.log(addTick);
        }
      );                    
    }
    
  }

}
