import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-userseatmap',
  templateUrl: './userseatmap.component.html',
  styleUrls: ['./userseatmap.component.css']
})
export class UserseatmapComponent implements OnInit {
  count: number;
  data=[];
  ids=[];
  isDisabled:boolean=false;
  

  constructor(private bookService:BookingServiceService,private router:Router) { }

  ngOnInit(): void {
    this.executeOnce();
  }

  executeOnce(){
    
    var component=this;
    $(function(){
      
      $('#selectSeats').off().on("click",()=>{
        console.log("aaa");
        //var val = [];
        $('input[type=checkbox]:checked').map(function(i){
          component.ids[i]=this.id;
        });
        component.bookService.seatData=component.ids;
        console.log(component.bookService.seatData);
      });
    });
    
    

  }

  checked(){
   // $('input[type=checkbox]:checked').prop('disabled', 'disabled');
    this.count=this.bookService.noOfPassengersData;
    if($('input[type=checkbox]:checked').length==this.count){
      $('input[type=checkbox]:not(:checked)').prop('disabled', true);
      
    }
    else if($('input[type=checkbox]:checked').length<this.count){
      $('input[type=checkbox]:not(:checked)').prop('disabled', false);
      
 }

    console.log($('input[type=checkbox]:checked').length);
  }


  bookseats(){

    
    
    this.executeOnce();

    setTimeout( ()=>{
      this.router.navigate(['/userPaymentPage']);
      }, 200)
    
    //  this.router.navigate(['/userPaymentPage']);
    
    


    // $("#selectSeats").on("click", function() {
    //   var checkedIds = $('input[type=checkbox]:checked').map(function() {
    //     return this.id;
    //   });
    //   console.log(checkedIds);
    //   // alert(checkedIds.join(", "));
    // });


  }

}
