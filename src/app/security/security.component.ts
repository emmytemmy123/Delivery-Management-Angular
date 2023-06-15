import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../Service/jwt-client.service';
import { Users } from '../Model/users/users';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../Service/users.service';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  users!: Users;

  username!: string;
  password!: string;

  userDetails: any;

  response:any;


  constructor(private jwtService: JwtClientService,private route: ActivatedRoute, private router: Router  ) { }

  ngOnInit(): void {

  }


  public getAccessToken(){

    const authRequest = {
      username: this.username,
      password: this.password
    };

    let resp=this.jwtService.generateToken(authRequest);
    resp.subscribe(data=> this.accessApi(data) );
    this.clearFields();
}


      public accessApi(token: string){
        localStorage.setItem("token", JSON.stringify(token));
        let resp=this.jwtService.authourization(token);
        resp.subscribe(data=>this.response=data);
        this.router.navigate(['/userPage']);

    }
    


   logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }


  clearFields(): void {
    this.username = ""; 
    this.password = ""; // Reassign a new User object to clear the fields
  }


}
