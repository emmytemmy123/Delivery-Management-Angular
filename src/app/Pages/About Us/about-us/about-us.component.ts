import { LayoutService } from './../../../Service/app.layout.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(public router: Router, private layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
