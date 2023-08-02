import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Delivery } from 'src/app/Model/transaction/delivery';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { DeliveryService } from 'src/app/Service/delivery.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  username!: string;

  delivery!: Delivery;
  deliveries!: Delivery[];

  deliveryNo!: any;

  selectedDeliveries!: Delivery[];

  usersCategory: any;
  address: any;
  city: any;
  email: any;
  gender: any;
  phone: any;
  name: any;

  constructor(public router: Router, private deliveryService: DeliveryService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.deliveryList();
    this.retrieveUserFromSeesion();
  }

  retrieveUserFromSeesion(){
    const userDetailFromSession = this.authService.getsession();
    this.usersCategory = userDetailFromSession['usersCategory']
    this.address = userDetailFromSession['address']
    this.city = userDetailFromSession['city']
    this.email = userDetailFromSession['email']
    this.gender = userDetailFromSession['gender']
    this.phone = userDetailFromSession['phone']
    this.name = userDetailFromSession['name']
    this.username = userDetailFromSession['username']
  
  }


  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
    this.router.navigate(['/adminLogin']);
  }



deliveryList(){
  this.deliveryService.getDeliveryList().subscribe(response => {
    if(response.code=='200'){
      this.deliveries = response["data"]
    }else{
      this.deliveries =[]
    }
  });
}


dispatchDelivery(deliveryNo: any){
  this.router.navigate(['dispatch', deliveryNo]);
}



onGlobalFilter(table: Table, event: Event) {
  table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}





}
