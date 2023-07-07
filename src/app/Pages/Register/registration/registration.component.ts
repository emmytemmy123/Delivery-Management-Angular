import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse, Users } from 'src/app/Model/users/users';
import { UsersService } from 'src/app/Service/users.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {

  users: Users = new Users;

  // users!:Users[];

  submitted = false;

  accountType!: any[];

  responseMessage!: string;




  constructor(private usersService: UsersService, public router: Router) { 
    
    this.accountType = [
      { name: "Sender" },
      { name: "Driver" }  
    ];

  }


  ngOnInit(): void {

    this.accountType = [
      { name: "Sender" },
      { name: "Driver" }  
    ];

  }


  saveUsers() {

   const body =  {
      accountType: this.users.accountType,
      name: this.users.name,
      email: this.users.email,
      phone: this.users.phone,
      address: this.users.address,
      gender: this.users.gender,
      country: this.users.country,
      nin: this.users.nin,
      city:this.users.city,
      username: this.users.username,
      password: this.users.password,
  
    };

    this.usersService.createUsers(this.users).subscribe(
      (response: ApiResponse) => {
        this.responseMessage = response.message;
        console.log('User saved:', response.data);
        console.log('Code:', response.code);
      },
   
    );
    this.clearFields();
  }
  
  clearFields(): void {
    this.users = new Users(); 
  }



}
