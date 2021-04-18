import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  checkLogin(loginForm:NgForm)
  {
    if(loginForm.valid)
    {
      // if(this.user.userName=="Kavusi" && this.user.userPassword=="lti")
      // {
      //   alert("Login Successfull");
      //   this.router.navigate(['/userDashboard']);
      // }
      // else{
      //   alert("invalid");
      //   this.router.navigate(['/home']);
      // }
      this.router.navigate(['/userDashboardPage'])
    }  
      else{
        alert("Please enter the details");
        }
  }  
}
