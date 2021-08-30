import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  createUser(user:any){
return this.http.post("http://localhost:3000/posts",user);
  }
  getAllUser(){
    return this.http.get("http://localhost:3000/posts")
  }
  updateUser(){}
  deleteUser(user:any){
    return this.http.delete<any>("http://localhost:3000/posts/" +user.id)
  }
}
