import { Component } from '@angular/core';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allUser !:any
  title = 'demo';
  userObj={
    name:'',
  mobile:'',
  email:'',
  password:'',
  id:''
  }
  

  
constructor(private common:CommonService){}
ngOnInit(){
  this.getLatestUser()
}
  addUser(formObj:any){
    console.log(formObj);
    
    this.common.createUser(formObj).subscribe((response)=>{
      this.getLatestUser()
      
    })
  }
  getLatestUser(){
this.common.getAllUser().subscribe((response)=>{
this.allUser=response
})

  }
  editUser(user:any){
    this.userObj=user;
  }
  deleteUser(user:any){
    this.common.deleteUser(user).subscribe(()=>{
this.getLatestUser()
    })
  }
}
