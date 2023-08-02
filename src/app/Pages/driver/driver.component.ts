import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/Service/app.layout.service';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  usersCategory: any;
  address: any;
  city: any;
  email: any;
  gender: any;
  phone: any;
  name: any;
  username: any;

  constructor(public router: Router, private layoutService: LayoutService, private authService:AuthenticationService ) { }

  ngOnInit(): void {
  }


 


}
