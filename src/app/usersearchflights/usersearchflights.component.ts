import { Component, OnInit } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-usersearchflights',
  templateUrl: './usersearchflights.component.html',
  styleUrls: ['./usersearchflights.component.css']
})
export class UsersearchflightsComponent implements OnInit {

  //constructor(private header:HeaderComponent,private app:AppComponent) { }

  constructor(){}
  
  ngOnInit(): void {
    //this.header.isVisibleAdminDashboard=false;
    //this.header.isVisibleMainDashboard=false;
    //this.app.isVisibleMainDashboard=false;
    //this.header.isVisibleUserDashboard=true;

  }

}
