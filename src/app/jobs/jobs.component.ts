import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  NgForm: any


  constructor() { }

  ngOnInit(): void {
  }


  save(form: NgForm) {

    let job = form.value;

    let jobJson: any = localStorage.getItem('jobs')

    let jobs = JSON.parse(jobJson)

    if (!jobs) {
      jobs = [];
      jobs.push(job)
      localStorage.setItem('jobs', JSON.stringify(jobs))
    }
    else {
      jobs.push(job)
      localStorage.setItem('jobs', JSON.stringify(jobs))
    }
    


  }

}
