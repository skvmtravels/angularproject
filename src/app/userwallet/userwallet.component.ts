import { Component, OnInit } from '@angular/core';
import { Wallet } from "../wallet";
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Walletdto } from '../walletdto';

@Component({
  selector: 'app-userwallet',
  templateUrl: './userwallet.component.html',
  styleUrls: ['./userwallet.component.css']
})
export class UserwalletComponent implements OnInit {

  walletobj:Wallet=new Wallet();

  user:User=new User();
  userId:number;
  wallet:DoubleRange;
  walletdto=new Walletdto();

  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
  }

  rechargeWallet(walletForm){
    
    if(walletForm.valid){
      this.userId=Number(localStorage.getItem("userId"));
      this.walletdto.user_id=Number(localStorage.getItem("userId"));
      this.walletdto.wallet=this.user.wallet;
      this.service.rechargeWallet(this.walletdto).subscribe(
        newWallet=>{
          console.log(newWallet);
          alert("Wallet has been Recharged..");
        }
      );
      alert("Form Submitted... Wait for Registered Email");
    }
    else{
      alert("Please fill details again.")
    }
  }

  
}