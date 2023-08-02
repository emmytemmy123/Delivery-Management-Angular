import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { LocalStorageService } from 'src/app/Service/local-storage.service';
import { SessionStorageService } from 'src/app/Service/session-storage.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  errorMessage!: string;

  ngOnInit(): void {

  }
  
  username!: string;
  password!: string;
  responseMessage!: string;

  constructor(private authService: AuthenticationService, private router:Router, 
    private localStorageService: LocalStorageService, private sessionStorageService: SessionStorageService) {}



  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {

        // Store token and user data in local storage or session storage
        this.localStorageService.setItem('token', response.token);
        this.sessionStorageService.setItem('data', response);

        if(response.code == "404"){
          this.responseMessage = "Invalid Username or Password"
          localStorage.removeItem('token');
          sessionStorage.removeItem('data');    
        }

        // Get user roles from the response
        const roles = response.roles;
  
        // Redirect user based on role
        if (roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/adminPage']);
        } else if (roles.includes('ROLE_USER')) {
          this.router.navigate(['/profile']);
        } else  {
          this.errorMessage = 'unAuthorized Role'; 
        }
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';       
           }
    );
    this.clear();

  }


  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
    this.router.navigate(['/adminLogin']);
  }
  

  clear(){
    this.username = '';
    this.password = '';
  }


clearErrorMessage(){
  this.errorMessage = ''; // Clear the error message
        
  // Set a timer to clear the error message after 5 seconds (adjust the duration as needed)
  setTimeout(() => {
    this.errorMessage = '';
  }, 2000);
}



}
