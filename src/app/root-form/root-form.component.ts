import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root-form',
  templateUrl: './root-form.component.html',
  styleUrls: ['./root-form.component.css']
})


export class RootFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  save(form: NgForm) {
    let user = form.value;

    let usersJson: any = localStorage.getItem('users');

    let users: any = JSON.parse(usersJson)


    
    if (users) {
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
    }
    
    else {
      
      users = []
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
    }

    form.reset();
    

  }

}

