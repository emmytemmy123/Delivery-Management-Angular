import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { LocalStorageService } from 'src/app/Service/local-storage.service';
import { SessionStorageService } from 'src/app/Service/session-storage.service';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})

export class Login3Component implements OnInit {


  ngOnInit(): void {
  }
  
  username!: string;
  password!: string;
  responseMessage!: string;

  constructor(private authService: AuthenticationService, private router:Router, 
    private localStorageService: LocalStorageService, private sessionStorageService: SessionStorageService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe((response) => {
      this.localStorageService.setItem('token', response.token);
      this.sessionStorageService.setItem('data', response);
      this.router.navigate(['/profile']);

    }, (error) => {
      // Handle login error
    });
  }



  

}
