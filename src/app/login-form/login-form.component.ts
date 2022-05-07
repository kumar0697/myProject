import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {





  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    //get localstorage data here
    let userJson: any = localStorage.getItem('users')
    
    //do Json to parse
    let users = JSON.parse(userJson)
   
    console.log(users);

    //find an emailid in array of user
    let user = users.find(function (user: any) {
      return user.email === form.value.username

    })

    //If email find in an array and input from form is same go to password else "Invalid Credential"

    if (!user) {
      alert("Invalid Credential");
      return;
    }


    //Check password for email which have same user array
    if (user.password === form.value.password) {
      
      //If an array password and input password is same "Logged In"
      alert("Logged In");
      this.router.navigate(['/root-form'])
      return;

    }
    // else "Invalid Credential"
    else {
      alert("Invalid Credential");
      return;
    }



  }


}
