import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchflightsComponent } from './searchflights/searchflights.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersearchflightsComponent } from './usersearchflights/usersearchflights.component';
import { UserbookingsComponent } from './userbookings/userbookings.component';
import { UsercancellationsComponent } from './usercancellations/usercancellations.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminaddflightsComponent } from './adminaddflights/adminaddflights.component';
import { AdminupdateflightsComponent } from './adminupdateflights/adminupdateflights.component';
import { AdminviewallflightsComponent } from './adminviewallflights/adminviewallflights.component';
import { AdmindeleteflightsComponent } from './admindeleteflights/admindeleteflights.component';
import { UsertobookflightlistComponent } from './usertobookflightlist/usertobookflightlist.component';
import { UserseatmapComponent } from './userseatmap/userseatmap.component';
import { UserpassengerdetailsComponent } from './userpassengerdetails/userpassengerdetails.component';
import { UserpaymentComponent } from './userpayment/userpayment.component';
import { UserticketprintComponent } from './userticketprint/userticketprint.component';
import { HeaderComponent } from './header/header.component';
import { ShowSearchedFlightsComponent } from './show-searched-flights/show-searched-flights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserwalletComponent } from './userwallet/userwallet.component';
import { UserviewticketComponent } from './userviewticket/userviewticket.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    SearchflightsComponent,
    AdmindashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent,
    UsersearchflightsComponent,
    UserbookingsComponent,
    UsercancellationsComponent,
    UserdashboardComponent,
    AdminaddflightsComponent,
    AdminupdateflightsComponent,
    AdminviewallflightsComponent,
    AdmindeleteflightsComponent,
    UsertobookflightlistComponent,
    UserseatmapComponent,
    UserpassengerdetailsComponent,
    UserpaymentComponent,
    UserticketprintComponent,
    HeaderComponent,
    ShowSearchedFlightsComponent,
    UserwalletComponent,
    UserviewticketComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
