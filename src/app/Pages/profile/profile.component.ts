import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse, Users } from 'src/app/Model/users/users';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { SessionStorageService } from 'src/app/Service/session-storage.service';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  uuid!: string;

  feedbackMessage!: string;

  isLoading = false;

  errorMessage!: string;

  visible!: boolean;

  currentUser:any;

  accountType!: any[];

  response!: any;

  userDetails: any;

  users!: Users; username: any; name: any; email: any; address: any; phone: any; gender: any; city: any; usersCategory: any;

  driverLicense: any;

  userForm!: FormGroup;


  constructor(private http: HttpClient, private userSerice:UsersService, private authService: AuthenticationService,
     private sessionStorageService: SessionStorageService, private route: ActivatedRoute, public router: Router, 
     private formBuilder: FormBuilder) {

      this.accountType = [
        { name: "Sender" },
        { name: "Driver" }  
      ];

     }


  ngOnInit(): void {

    this.assignUserDetailsToForm();
    this.retrieveUserFromSeesion();
    this.updateUserToFormGroupFromSession();

  }


retrieveUserFromSeesion(){
  const userDetailFromSession = this.authService.getsession();
  this.usersCategory = userDetailFromSession['usersCategory']
  this.address = userDetailFromSession['address']
  this.city = userDetailFromSession['city']
  this.email = userDetailFromSession['email']
  this.gender = userDetailFromSession['gender']
  this.phone = userDetailFromSession['phone']
  this.name = userDetailFromSession['name']
  this.username = userDetailFromSession['username']

}


updateUserToFormGroupFromSession() {
  
  //creating FormGroup
  this.userForm = new FormGroup({
    nameControl: new FormControl(''),
    emailControl: new FormControl(''),
    phoneControl: new FormControl(''),
    addressControl: new FormControl(''),
    cityControl: new FormControl(''),
    driverLicenseControl: new FormControl('')
  });

  // Retrieve data from local storage and populate the form controls
  const storedData = this.authService.getsession();
  if (storedData) {
    this.userForm.patchValue({
      nameControl: storedData.name,
      emailControl: storedData.email,
      phoneControl: storedData.phone,
      addressControl: storedData.address,
      cityControl: storedData.city,
      driverLicenseControl: storedData.driverLicense
    });
  }
}


assignUserDetailsToForm() {
  this.userForm = this.formBuilder.group({
    nameControl: ['', Validators.required],
    cityControl: ['', Validators.required],
    addressControl: ['', Validators.required],
    phoneControl: ['', Validators.required],
    driverLicenseControl: ['', Validators.required]
  });

}


updateCurrentUser() {
  const uuidFromSession = this.authService.getCurrentUsersDetails();
  console.log(uuidFromSession);
  
  if (uuidFromSession) {
    if (this.userForm) {
    const formData = this.userForm.value;

    const payload =  {
      name: formData.nameControl,
      city: formData.cityControl,
      address: formData.addressControl,
      phone: formData.phoneControl,
      driverLicense: formData.driverLicenseControl,
    };

    this.userSerice.updateUsers(uuidFromSession, payload).subscribe(
      (response) => {
        this.response = response;
        this.feedbackMessage = response.data;
        console.log( "response", this.response);
      },
      (error) => {
        console.error('Error updating user:', error);
        // Handle error appropriately (e.g., show error message to the user)
      }
    );
    this.clearForm();
  }
}

}


clearForm() {
  this.userForm.reset();
}
  
  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
    this.router.navigate(['/login3']);
  }


  
  showDialog() {    
    this.visible = true;
  }


 

}
