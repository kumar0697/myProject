import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
logs:any=[]

  constructor() { }
  
  ngOnInit(): void {
  }
  
  save(form:NgForm){
    
    
   let key =  JSON.stringify(form.value)
   console.log(key)
 if(key){
   localStorage.setItem(key,form.value)
   this.logs.push([form.value]);
 }
  else{
    localStorage.setItem(key,form.value)
  }
    
    
  }
}
