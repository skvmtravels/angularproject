import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  
  constructor(private service:UserServiceService) { }

  userEmail:string;
  user:User=new User();

  ngOnInit(): void {

    this.userEmail=(localStorage.getItem("userEmail"));
    this.service.findUserByEmail(this.userEmail).subscribe(
      fetchedUser=>{
        console.log(JSON.stringify(fetchedUser));
        this.user=fetchedUser;
      }
    );

  }

}
