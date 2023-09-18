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

  isEmailValid: any;  

  submitted = false;

  userCategory!: any[];

  responseMessage!: string;

  form: FormGroup;




  constructor(private usersService: UsersService, public router: Router, private formBuilder: FormBuilder) { 
    
    this.userCategory = [
      { name: "Sender" },
      { name: "Driver" }  
    ];



    // Initialize the form with form controls and their initial values
    this.form = this.formBuilder.group({
      userCategory: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(11)]],
      address: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });


  }


  ngOnInit(): void {

   

  }




saveUsers() {
  this.submitted = true;

  // Check if the form is valid before submitting
  if (this.form.valid) {
    const body = this.form.value; // Use form.value to get the form data

    this.usersService.createUsers(body).subscribe((response) => {
      if (response.data == 200) {
        this.responseMessage = 'Registration Successful';
      } else {
        this.responseMessage = 'Registration Not Successful';
      }
    });

    this.clearFields();
  }
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


  
clearFields() {
  // Clear the form fields and reset the form status
  this.form.reset();
  this.submitted = false;
}



}
