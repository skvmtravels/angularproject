import { Component, OnInit } from '@angular/core';
import { Passenger } from "../passenger";

@Component({
  selector: 'app-userpassengerdetails',
  templateUrl: './userpassengerdetails.component.html',
  styleUrls: ['./userpassengerdetails.component.css']
})
export class UserpassengerdetailsComponent implements OnInit {

  passenger= new Passenger();
  dataArray=[];
  constructor() { }

  ngOnInit(): void {
    this.passenger=new Passenger();
    this.dataArray.push(this.passenger);
  }

  addForm(){
    this.passenger=new Passenger();
    this.dataArray.push(this.passenger);
  }

  removeForm(index){
    this.dataArray.splice(index);
  }
  onSubmit(){
    console.log(this.dataArray);
  }

}
