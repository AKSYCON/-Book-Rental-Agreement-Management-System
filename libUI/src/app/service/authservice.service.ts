import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  apiUrl = 'https://localhost:44340/api/'

  jwtHeplerService = new JwtHelperService();
  constructor(private http: HttpClient,private router: Router) { }

  registerUser(user: Array<any>){
    return this.http.post(this.apiUrl + "User/CreateUser",{
      Name: user[0],
      Email: user[1],
      Password: user[2],
      Token: user[3],
      NumberOfBorrow: user[4],
      NumberOfLent: user[5]
    },{responseType: 'text'});
  }

  loginUser(user: Array<any>){
    return this.http.post(this.apiUrl + 'User/Login',{
      Email: user[0],
      Password: user[1]
    },{responseType : 'text'})
  }

  setToken(token: string){
    localStorage.setItem("access_token", token);
    this.UserDet();
  }

  UserDet()
  {
    const token = localStorage.getItem("access_token");
    const newUser = token != null ? this.jwtHeplerService.decodeToken(token) : null;

    const res = newUser ? {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      tokens: newUser.token
    } : null;
    this.currentUser.next(res);
    return res;
  }

  isLogged(): boolean{
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken(){
    localStorage.removeItem("access_token");
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}User/GetUser/${userId}`);
  }
}
