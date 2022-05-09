import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
@Input() todoItem : any;

  constructor() { }

  ngOnInit(): void {
  }

  
}
