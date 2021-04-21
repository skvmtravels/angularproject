import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contactus } from './contactus';
import { Feedback } from './feedback';
import { Observable } from 'rxjs';
import { Loginuser } from './loginuser';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) { }

  registerUser(user:User):Observable<User>
  {
      return this.httpClient.post<User>("http://localhost:9090/registeruser",user);
  }

  validUser(loginUser:Loginuser):Observable<Boolean>
  {
    return this.httpClient.post<Boolean>("http://localhost:9090/loginuser",loginUser);
  }

  findUserById(userId:number):Observable<User>{
    return this.httpClient.get<User>("http://localhost:9090/users/"+userId);
  }

  findUserByEmail(email:string):Observable<User>{
    return this.httpClient.get<User>("http://localhost:9090/email/"+email);
  }

  updateUser(user:User,userId:number):Observable<User>{
    return this.httpClient.put<User>("http://localhost:9090/updateusers/"+userId,user);
  }

  validAdmin(loginUser:Loginuser):Observable<Boolean>
  {
    return this.httpClient.post<Boolean>("http://localhost:9090/loginadmin",loginUser);
  }

  getFeedback(feedback:Feedback):Observable<Feedback>{
    return this.httpClient.post<Feedback>("http://localhost:9090/getFeedback",feedback);
  }

  getContactus(contactus:Contactus):Observable<Contactus>{
    return this.httpClient.post<Contactus>("http://localhost:9090/getContactUs",contactus);
  }
}
