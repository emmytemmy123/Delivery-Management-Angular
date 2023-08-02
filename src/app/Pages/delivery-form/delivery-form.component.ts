import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Delivery } from 'src/app/Model/transaction/delivery';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { DeliveryService } from 'src/app/Service/delivery.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  disp: any[] = [];

  username!: string;

  delivery!: Delivery;
  deliveries!: Delivery[];

  selectedDeliveries!: Delivery[];

  usersCategory: any;
  address: any;
  city: any;
  email: any;
  gender: any;
  phone: any;
  name: any;

 

  constructor(public router: Router, private deliveryService: DeliveryService, private authService:AuthenticationService) { }

  ngOnInit(): void {
    // this.deliveryList();
    this.retrieveUserFromSeesion();
    this.getDeliveryBySenderName();
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

  
deliveryList(){
  this.deliveryService.getDeliveryList().subscribe(response => {
    if(response.code=='200'){
      this.deliveries = response["data"]
      console.log(this.deliveries)
    }else{
      this.deliveries =[]
    }
  });
}


getDeliveryBySenderName() {

  const uuidFromSession = this.authService.getCurrentUsersDetails();
  console.log(uuidFromSession);

  if(uuidFromSession){
    this.deliveryService.getDeliveryBySenderUuid(uuidFromSession).subscribe((response) => {

      if(response.message =='Success'){
        this.disp = response["data"]
      }else{
        this.disp =[]
      }
    
      },
      (error) => {
        console.error('Error fetching delivery order:', error);
      }
    );
  }
}


  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
    this.router.navigate(['/home']);
  }





}
