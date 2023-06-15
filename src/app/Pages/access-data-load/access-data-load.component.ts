import { Component, OnInit } from '@angular/core';
import { AccessTokenDataService } from 'src/app/Service/access-token-data.service';

@Component({
  selector: 'app-access-data-load',
  templateUrl: './access-data-load.component.html',
  styleUrls: ['./access-data-load.component.css']
})
export class AccessDataLoadComponent implements OnInit {

  data: any;

  constructor(private accessTokenDataService: AccessTokenDataService) {}

  ngOnInit() {

    this.accessTokenDataService.get('users/get/').subscribe(
      response => {
        this.data = response;
        // Process the retrieved data as needed
        this.data.name;
      },
      error => {
        console.error('Failed to retrieve data:', error);
        // Handle error, display error message, etc.
      }
    );


  }

  

}
