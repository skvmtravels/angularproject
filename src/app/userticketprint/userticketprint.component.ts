import { Component, OnInit } from '@angular/core';
import  jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { FlightServiceService } from '../flight-service.service';
import { Flight } from '../flight';
import { BookingServiceService } from '../booking-service.service';
import { Ticket } from '../ticket';
import { Passenger } from '../passenger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userticketprint',
  templateUrl: './userticketprint.component.html',
  styleUrls: ['./userticketprint.component.css']
})
export class UserticketprintComponent implements OnInit {

  flight=new Flight();
  tickets:Ticket[];
  passengers:Passenger[];
  ticket=new Ticket();
  userEmail:string;
  
  constructor(private flightService:FlightServiceService,public bookService:BookingServiceService,private router:Router) { }
  

  ngOnInit(): void {
    this.userEmail=(localStorage.getItem("userEmail"));
    if(this.userEmail==null){
      this.router.navigate(['/loginPage'])
    }
    this.bookService.findFlightById(this.bookService.flightNoData).subscribe(
      findFlight=>{
        this.flight=findFlight;
      }
    );

    this.bookService.findTicketByBookingId(this.bookService.bookingIdData).subscribe(
      findTickets=>{
        this.tickets=findTickets;
        
      }
    );

    this.bookService.findPassByBookingId(this.bookService.bookingIdData).subscribe(
      findpasseng=>{
        this.passengers=findpasseng;
      }
    );
  }

  
  public downloadPDF(){
    var data = document.getElementById('table');
    html2canvas(data,{scrollY: -window.scrollY, scale: 1}).then(canvas => {
    //console.log(canvas)
    var imgWidth = 208;
    var pageHeight=295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    var contentDataURL = canvas.toDataURL('image/png')
    let doc = new jspdf('p' , 'mm', 'a4');
    var position=0;
    console.log(doc.output('datauristring'));
    doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    
    var data = new Blob([doc.output()], {
      type: 'application/pdf'
  });

    var formdata=new FormData();
    formdata.append("pdf",data,"ticket.pdf");
    console.log(formdata.get("pdf"));
    doc.save('ticket.pdf'); 
    });                                                                                   
  }

  logout():void{
    console.log("clearing.....")
    localStorage.clear();
  }

}
