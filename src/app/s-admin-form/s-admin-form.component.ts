import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-admin-form',
  templateUrl: './s-admin-form.component.html',
  styleUrls: ['./s-admin-form.component.css']
})
export class SAdminFormComponent implements OnInit {
  NgForm: any


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  save(form: NgForm) {
    let user = form.value;

    let usersJson: any = localStorage.getItem('superadmin');

    let users = JSON.parse(usersJson);
    
    if (!users) {
      users = []
      users.push(user)
      localStorage.setItem('superadmin', JSON.stringify(users))
    }
    else {
      users.push(user)
      localStorage.setItem('superadmin', JSON.stringify(users))
    }
    this.router.navigate(['/'])
  }





}



