import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Model/users/users';
import { JwtClientService } from 'src/app/Service/jwt-client.service';
import { LoginService } from 'src/app/Service/login.service';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users!: Users;
  
  uuid!: string;

  currentUser: any;
  response: any;

  constructor(private usersService:UsersService, private router:Router,
     private route: ActivatedRoute,private jwtService: JwtClientService ) { 


      

     }

  ngOnInit(): void {

    
  }



  
  // getData(token: string){
  //   localStorage.getItem('token');

  //   const userUuid = this.extractUserUuidFromToken(token);

  //   this.jwtService.getUserDetailsById(userUuid,token).subscribe(
  //     (response: any) => {
  //       this.response = response;
  //     },
  //     (error) => {
  //       console.error('Failed to retrieve user details:', error);
  //       // Handle error, display error message, etc.
  //     }
  //   );1
  // }


  private extractUserUuidFromToken(token: string): string {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      throw new Error('Invalid token format');
    }
  
    const encodedPayload = tokenParts[1];
    const decodedPayload = this.base64Decode(encodedPayload);
    const payload = JSON.parse(decodedPayload);
  
    if (!payload || !payload.user_uuid) {
      throw new Error('Invalid token or missing user UUID');
    }
  
    return payload.user_uuid;
  }


  private base64Decode(encodedString: string): string {
    const base64Url = encodedString.replace(/-/g, '+').replace(/_/g, '/');
    const base64 = base64Url.replace(/%3d/gi, '=');
    return atob(base64);
  }




  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


  // if(localStorage['saveUser'].email == email && localStorage['saveUser'].password == password ){
  //   localStorage.setItem("currentUser", JSON.stringify(body));
  // }
 




}


