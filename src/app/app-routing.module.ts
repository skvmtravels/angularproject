import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
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
import { ShowSearchedFlightsComponent } from './show-searched-flights/show-searched-flights.component';

const routes: Routes = [
  {​​​​​​​
    path:'',component:HomeComponent
  }​​​​​​​,
  {​​​​​​​
    path:'homePage',component:HomeComponent
  }​​​​​​​,
  {​​​​​​​
    path:'aboutUsPage',component:AboutusComponent
  }​​​​​​​,
  {​​​​​​​
    path:'contactUsPage',component:ContactusComponent
  }​​​​​​​​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'searchFlightsPage',component:SearchflightsComponent
  }​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'loginPage',component:LoginComponent
  }​​​​​​​​​​​​​,
  {​​​​​​​
    path:'registerPage',component:RegisterComponent
  }​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'adminDashboardPage',component:AdmindashboardComponent
  }​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'userDashboardPage',component:UserdashboardComponent
  }​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'userBookingsPage',component:UserbookingsComponent
  }​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'userCancellationsPage',component:UsercancellationsComponent
  }​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'userProfilePage',component:UserprofileComponent
  }​​​​​​​​​​​​​​,
  {
    path:'userPassengerDetailsPage',component:UserpassengerdetailsComponent
  },
  {
    path:'userSeatMapPage',component:UserseatmapComponent
  },
  {
    path:'userPaymentPage',component:UserpaymentComponent
  }​​​​​​​​​​​​​​,
  {
    path:'userToBookPage',component:UsertobookflightlistComponent
  },
  {​​​​​​​
    path:'userSearchFlightsPage',component:UsersearchflightsComponent
  },
  {​​​​​​​
    path:'userTicketPrintPage',component:UserticketprintComponent
  },
  {​​​​​​​
    path:'addFlightsPage',component:AdminaddflightsComponent
  }​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'updateFlightsPage',component:AdminupdateflightsComponent
  }​​​​​​​​​​​​​​,
  {​​​​​​​
    path:'viewAllFlightsPage',component:AdminviewallflightsComponent
  }​​​​​​​​​​​​​​,
  {
    path:'deleteFlightsPage',component:AdmindeleteflightsComponent
  },
  {
    path:'showSearchedFlights',component:ShowSearchedFlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
