import { Component, OnInit } from '@angular/core';
import { Contactus } from '../contactus';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactus:Contactus=new Contactus();
  constructor() { }

  ngOnInit(): void {
  }

sendMsg(contactusForm){
  if(contactusForm.valid){
    console.log(this.contactus);
    alert("Form Submitted... Wait for Email");
  }
  else{
    alert("Please fill details again.")
  }
}
}
