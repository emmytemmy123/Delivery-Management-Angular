import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dispatch } from 'src/app/Model/transaction/dispatch';
import { Users } from 'src/app/Model/users/users';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { CountryService } from 'src/app/Service/countryservice';
import { DispatchService } from 'src/app/Service/dispatch.service';
import { FileUploadService } from 'src/app/Service/file-upload.service';
import { SessionStorageService } from 'src/app/Service/session-storage.service';
import { UsersService } from 'src/app/Service/users.service';


interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}


@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css']
})
export class DriverProfileComponent implements OnInit {

  dispatch!: Dispatch;
  dispatchs!: Dispatch[];

  getMeDispatchName: any;

  imageUrl!: string;

  selectedFile!: File;

  uuid!: string;

  feedbackMessage!: string;

  isLoading = false;

  errorMessage!: string;

  visible!: boolean;

  dispatchName!: string;

  currentUser:any;

  accountType!: any[];

  response!: any;

  userDetails: any;

  users!: Users;

  genders!: any[];
  
  username: any; name: any; email: any; address: any; phone: any; gender: any; city: any; usersCategory: any;

  driverLicense: any;

  userForm!: FormGroup;
  responseMessage!: string;

  countries!: any[];
  selectedCountry: any;
  filteredCountries!: any[];
  myDispatchNameVariable: any|string;


  constructor(private http: HttpClient, private userSerice:UsersService, private authService: AuthenticationService,
     private sessionStorageService: SessionStorageService, private route: ActivatedRoute, public router: Router, 
     private formBuilder: FormBuilder, private fileUploadService: FileUploadService, private countryService: CountryService,
     private dispatchService: DispatchService) {

      this.accountType = [
        { name: "Sender" },
        { name: "Driver" }  
      ];

      this.genders=[
        {gender: "Male"},
        {gender: "Female"}
      ];

     }


  ngOnInit(): void {
    this.loadImagePreview();
    this.assignUserDetailsToForm();
    this.retrieveUserFromSeesion();
    this.updateUserToFormGroupFromSession();
    this.country();
  
  }


  country(){
    this.countryService.getCountries().then((countries) => {
      this.countries = countries;
  });
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
    countryControl: new FormControl(''),
    phoneControl: new FormControl(''),
    genderControl: new FormControl(''),
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


onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}


uploadPhoto() {
  const uuidFromSession = this.authService.getCurrentUsersDetails();
  console.log(uuidFromSession);

  if (uuidFromSession ) {

    this.userSerice.updateUsersPhoto(uuidFromSession, this.selectedFile).subscribe(
      response => {

        if(response.message == "Success"){
          this.responseMessage = ("Your profile picture uploaded Successfull")
          console.log('File uploaded successfully', response);

        }
        else{
          this.responseMessage = ("Not Successfull");
        }

      },
      error => {
        console.error('File upload error:', error);
        // Handle the error as needed
      }
    );
  }
      this.refreshPageTimeOut();

}


loadImagePreview() {
  const photoFromSession = this.fileUploadService.getCurrentUsersPhoto();
  console.log(photoFromSession);

  if(photoFromSession){

    this.fileUploadService.getImagePreview(photoFromSession).subscribe(
      (imageUrl) => {
        this.imageUrl = imageUrl;
      },
      (error) => {
        console.error('Error fetching image:', error);
      }
    );

  }
}


filterCountry(event: AutoCompleteCompleteEvent) {
  let filtered: any[] = [];
  let query = event.query;

  for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(country);
      }
  }

  this.filteredCountries = filtered;
}

assignUserDetailsToForm() {
  this.userForm = this.formBuilder.group({
    nameControl: ['', Validators.required],
    cityControl: ['', Validators.required],
    genderControl: ['', Validators.required],
    countryControl: ['', Validators.required],
    driverLicenseControl: ['', Validators.required]
  });

}


// DispatchList(){
//   this.dispatchService.getDispatchList().subscribe(response => {
//     if(response.code=='200'){
//       this.dispatchs = response["data"]
//       this.myDispatchNameVariable = response;
//       console.log("dispatchName", this.myDispatchNameVariable)
//       console.log(response)
//     }else{
//       this.dispatchs =[]
//     }
//   });
// }


DispatchList() {
  this.dispatchService.getDispatchList().subscribe(response => {
    if (response.code == '200') {
      this.dispatchs = response["data"];

      // Access dispatchName for each dispatch and store them in an array
      this.myDispatchNameVariable = this.dispatchs.map(dispatch => dispatch.dispatchName);
      console.log("dispatchName", this.myDispatchNameVariable);
      console.log(response);
    } else {
      this.dispatchs = [];
    }
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
      country: formData.countryControl,
      gender: formData.genderControl,
      city: formData.cityControl,
      address: formData.addressControl,
      phone: formData.phoneControl,
      driverLicense: formData.driverLicenseControl,
    };

    this.userSerice.updateUsers(uuidFromSession, payload).subscribe(
      (response) => {

        if(response.message == "Success"){
          this.feedbackMessage = "Profile updated successfully"
        }
        else{
          this.feedbackMessage = "Profile not updated"
        }
        
      },
      (error) => {
        console.error('Error updating user:', error);
        // Handle error appropriately (e.g., show error message to the user)
      }
    );
    this.clearForm();
  }
}
this.refreshPageTimeOut();

}


clearForm() {
  this.userForm.reset();
}

  
logout(){
  localStorage.removeItem('token');
  sessionStorage.removeItem('data');
  this.router.navigate(['/home']);
}


dispatchDelivery(){
  const dispatchName = this.authService.getCurrentUserName();
  console.log(dispatchName);
  this.router.navigate(['driverDispatch', dispatchName]);
}

  
  showDialog() {    
    this.visible = true;
  }


  private refreshPage(): void {
    window.location.reload(); // Reload the page
  }


  refreshPageTimeOut(){
      setTimeout(() => {
      this.refreshPage();
    }, 5000);
  }









}
