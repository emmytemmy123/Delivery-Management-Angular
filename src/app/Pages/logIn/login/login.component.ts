import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse, Users } from 'src/app/Model/users/users';
import { JwtClientService } from 'src/app/Service/jwt-client.service';
import { LoginService } from 'src/app/Service/login.service';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  message: any
  users!: Users;
  loginError: any;



  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute,
    private usersService: UsersService, private jwtService: JwtClientService) { }

  ngOnInit(): void {

    // this.uuid = this.route.snapshot.params['uuid'];

  }



  login(): void {

    this.loginService.login(this.email, this.password).subscribe(
      (response: ApiResponse) => {
        if (response.code === 200) {
          console.log('Login successful');
        } else {
          this.loginError = response.message;
          console.log('Login failed:', response.message);
        }
      },
    );
    this.router.navigate(['/userDetails']);
  }



 



}
