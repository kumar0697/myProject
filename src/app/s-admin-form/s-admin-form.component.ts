import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-s-admin-form',
  templateUrl: './s-admin-form.component.html',
  styleUrls: ['./s-admin-form.component.css']
})
export class SAdminFormComponent implements OnInit {
 NgForm:any


  constructor() { }

  ngOnInit(): void {
  }
  save(form:NgForm){
    let user = form.value;
    
    let usersJson :any = localStorage.getItem('user');
     
    let users = JSON.parse(usersJson);
    
    users = []
    users.push( user )
     ( users.length  | users.length )
    


  }
  

}



