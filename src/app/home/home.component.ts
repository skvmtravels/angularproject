import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./bootstrap.min.css']
})
export class HomeComponent implements OnInit {


  feedback:Feedback=new Feedback();
  constructor() { }

  ngOnInit(): void {
  }

  sendFeedback(feedbackForm){
    if(feedbackForm.valid){
      console.log(this.feedback);
      alert("Form Submitted... Wait for Email");
    }
    else{
      alert("Please fill details again.")
    }
  }
}
