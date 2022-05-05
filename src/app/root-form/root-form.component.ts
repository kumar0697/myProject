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
  save(form:NgForm){
    console.log(form.value);
  }
}
