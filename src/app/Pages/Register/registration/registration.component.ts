import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  userCategory!: any[];

  responseMessage!: string;
  form: FormGroup;




  constructor(private usersService: UsersService, public router: Router, private fb: FormBuilder) { 
    
    this.userCategory = [
      { name: "Sender" },
      { name: "Driver" }  
    ];


    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });


  }


  ngOnInit(): void {

    this.userCategory = [
      { name: "Sender" },
      { name: "Driver" }  
    ];

  }


  saveUsers() {

   const body =  {
      userCategory: this.users.userCategory,
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

    this.usersService.createUsers(this.users).subscribe((response) => {

        if(response.data == "200"){
          this.responseMessage = ("Registration Successfull")
        }
        else{
          this.responseMessage = ("Registration not Successfull");
        }

      });
    this.clearFields();
  }


  // Inside your component class
hasEmptyRequiredFields(): boolean {
  return (
      !this.users.name ||
      !this.users.email ||
      !this.users.phone ||
      !this.users.address ||
      !this.users.username ||
      !this.users.password
  );
}


  
  
  clearFields(): void {
    this.users = new Users(); 
  }



}
