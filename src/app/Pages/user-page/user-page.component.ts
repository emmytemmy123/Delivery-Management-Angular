import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Model/users/users';
import { LocalStorageService } from 'src/app/Service/local-storage.service';
import { UserPageService } from 'src/app/Service/user-page.service';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  uuid!: string;

  users!: any;

  visible!: boolean;

  currentUser:any;

  accountType!: any[];

  name: any; usersType:any;  username: any; type:any;
  email: any;  address: any;  phone: any;  city: any;  gender: any;
  usersCategory: any;

  constructor(private localStorageService: LocalStorageService, public router: Router,
    private route: ActivatedRoute, private userService: UsersService  ) {

      this.accountType = [
        { name: "Sender" },
        { name: "Driver" }  
      ];
     }


  ngOnInit(): void {

    this.currentUser = this.localStorageService.getItem('token');

    const localStorageValue = this.localStorageService.getItem('token');
    const parsedValue = JSON.parse(localStorageValue);

    this.name = parsedValue.name;
    this.username = parsedValue.username;
    this.email = parsedValue.email;
    this.address = parsedValue.address;
    this.phone = parsedValue.phone;
    this.gender = parsedValue.gender;
    this.city = parsedValue.city;
    this.usersCategory = parsedValue.usersCategory;

  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/security']);
  }


  showDialog() {
      this.visible = true;
  }



  saveUsers(){}


  }
