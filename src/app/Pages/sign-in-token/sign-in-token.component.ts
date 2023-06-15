import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-token',
  templateUrl: './sign-in-token.component.html',
  styleUrls: ['./sign-in-token.component.css']
})
export class SignInTokenComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }


  login() {
    
    const credentials = {
      username: this.username,
      password: this.password
    };

    // Make a POST request to the login API endpoint
    this.http.post<any>('http://localhost:8181/appUserauthenticate', credentials).subscribe(
      response => {
        // Assuming the API returns an access token
        const accessToken = response.accessToken;
        // Store the access token in local storage or other suitable mechanism
        localStorage.setItem('accessToken', accessToken);
        console.log(accessToken);

        // Redirect or perform any necessary action after successful login
      },
      error => {
        console.error('Login failed:', error);
        // Handle login error, display error message, etc.
      }
    );
  }




}
