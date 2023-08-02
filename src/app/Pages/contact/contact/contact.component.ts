import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/Service/app.layout.service';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
