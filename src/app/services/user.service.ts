import { Injectable } from '@angular/core';

import{HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {UserTable} from 'src/app/Model/userTable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {headers:new HttpHeaders({
    'Content-Type':'application/json'
  })}
  
  baseURL: string = "http://localhost:3000/users";
  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get<UserTable[]>(this.baseURL);
  }
  addUser(user)
  {
    return this._http.post<UserTable>(this.baseURL,JSON.stringify(user),this.httpOptions);
  }
  deleteUser(id)
  {
    return this._http.delete<UserTable>(this.baseURL+"\\"+id,this.httpOptions);
  }
  editUser(id,user)
  {
    return this._http.put<UserTable>(this.baseURL+"\\"+id,JSON.stringify(user),this.httpOptions);
  }
  getUserById(id){
    return this._http.get<UserTable>(this.baseURL+"\\"+id);
  }
}
