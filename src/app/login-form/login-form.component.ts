import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
NgForm:any=[]
logins:any=[]

  constructor() { }
  
  ngOnInit(): void {
  }


  
  save(form:NgForm){
    
    
    let key=JSON.stringify(form.value);

console.log(key)
   if(Array.length>0){
     localStorage.setItem('sky',key);
    
 
 }
  else{
    localStorage.setItem('sky',key);
  }
    
  this.logins.push([form.value])
  }
}
