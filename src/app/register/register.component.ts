import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User();
  
  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  regUser():void
  {
    this.service.registerUser(this.user).subscribe(
      userAdded=>{
        console.log(userAdded);
        if(userAdded)
        {
          this.router.navigate(['/loginPage'])
        }
      }
    );
  }
  
}
