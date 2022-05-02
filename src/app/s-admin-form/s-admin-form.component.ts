import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-s-admin-form',
  templateUrl: './s-admin-form.component.html',
  styleUrls: ['./s-admin-form.component.css']
})
export class SAdminFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  save(form:NgForm){
    console.log(form);
  }

}
