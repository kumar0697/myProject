import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
users:any=[]



constructor() { }
  
  ngOnInit(): void {
  }

  save(form:NgForm){
    
    let obtain = [form.value];
    let key = JSON.stringify(obtain);
   localStorage.setItem('sky',key);


  localStorage.getItem('sky')

      if (obtain){
        localStorage.setItem('sky',key);
        this.users.push(obtain);
        
      }
      
      else{
        localStorage.setItem('sky',key);
      }
      
      /*
      let userSaves = JSON.parse(localStorage.getItem('sky'))
      if(){
        localStorage.setItem('sky',JSON.stringify(key));
        
        
      }
      else{
        localStorage.setItem('sky',JSON.stringify([key]));
      }
      
      this.userSave.push([form.value])
      console.log(localStorage.getItem('sky'))*/
      
    }
    
  
}
