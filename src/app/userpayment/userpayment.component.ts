import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styleUrls: ['./userpayment.component.css']
})
export class UserpaymentComponent implements OnInit {

  ticket=new Ticket();
  i:number;

  constructor(private bookService:BookingServiceService) { }

  ngOnInit(): void {
   console.log( this.bookService.seatData);
  }

  payment():void{
    
    for(this.i=0;this.i<this.bookService.noOfPassengersData;this.i++){
      this.ticket.seatNo=this.bookService.seatData[this.i];
      this.bookService.addTicket(this.ticket).subscribe(
        addTick=>{
          console.log(this.bookService.passengerIdData);
          console.log(addTick);
        }
      );                    
    }
    
  }

}
