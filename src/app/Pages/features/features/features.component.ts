import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/Service/app.layout.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(public layoutService: LayoutService, public router: Router) { }

  ngOnInit(): void {
  }

}
