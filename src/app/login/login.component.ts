import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginuser } from '../loginuser';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser=new Loginuser();
  
  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  
  checkLogin():void
  {
    this.service.validUser(this.loginuser).subscribe(
      isValid=>{
        if(isValid)
        {
          localStorage.setItem("userEmail",this.loginuser.email);
          this.router.navigate(['/userDashboardPage']);
        }
        else{
          this.service.validAdmin(this.loginuser).subscribe(
            isAdmValid=>{
              if(isAdmValid)
              {
                this.router.navigate(['/adminDashboardPage']);
              }
              else{
                alert("Enter Valid Credentials");
                this.router.navigate(['/loginPage']);
              }
            }
          );
          
        }
      }
    );
   
    }


}
