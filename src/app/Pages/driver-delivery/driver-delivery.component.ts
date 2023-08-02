import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Product } from 'src/app/Model/products/product';
import { Delivery } from 'src/app/Model/transaction/delivery';
import { Dispatch } from 'src/app/Model/transaction/dispatch';
import { Users } from 'src/app/Model/users/users';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { DeliveryService } from 'src/app/Service/delivery.service';
import { DispatchService } from 'src/app/Service/dispatch.service';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-driver-delivery',
  templateUrl: './driver-delivery.component.html',
  styleUrls: ['./driver-delivery.component.css']
})
export class DriverDeliveryComponent implements OnInit {

  deliveryNo!: string;
  driverEmail!: string;
  
  responseMessage!: string;

  dispatchs!: Dispatch;
  dispatches!: Dispatch[];

  users!: Users;

  selectedDispatches!: Dispatch[];

  uuid!: string;
  delivery!: Delivery;
  usersCategory: any;
  address: any;
  city: any;
  email: any;
  gender: any;
  phone: any;
  name: any;
  username: any;

  constructor(private dispatchService : DispatchService,private authService: AuthenticationService,
     private deliveryService: DeliveryService, private usersService: UsersService, private route: ActivatedRoute,
     public router:Router, private disService: DispatchService ) { }


  ngOnInit(): void {
  this. deliveryOrderByDeliveryNo();
  this.retrieveUserFromSeesion();
  this.DispatchList();
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

  dispatch() {
    const uuidFromSession = this.authService.getCurrentUsersDetails();
    console.log(uuidFromSession);
  
    if (uuidFromSession) {
     
          const payload = {
            deliveryNo: this.deliveryNo,
            driverEmail: this. driverEmail,
          };
  
          this.dispatchService.createDispatch(payload).subscribe((response) => {
            if(response.code == "200"){
              this.responseMessage = ("Product Dispatched");
            }else{
              this.responseMessage = ("This Delivery Order is already Dispatched");
            }
            },
            (error) => {
              console.error('Error creating dispatch:', error);
            }
          );
        this.clear();
      } 
    }
  

  deliveryOrderByDeliveryNo(){
    this.deliveryNo = this.route.snapshot.params['deliveryNo'];
    this.deliveryService.getDeliveryByDeliveryNo(this.deliveryNo).subscribe((response) =>{
      if(response.code=='200'){
        this.dispatchs = response["data"]
      }else{
        this.dispatches =[]
      }
    })
  }


  DispatchList(){
    this.dispatchService.getDispatchList().subscribe(response => {
      if(response.code=='200'){
        this.dispatches = response["data"]
      }else{
        this.dispatches =[]
      }
    });
  }


  payment(deliveryNo: string){
    this.router.navigate(['payment', deliveryNo]);
  }


  clear(){
    this.deliveryNo = '';
    this.driverEmail = '';
  }


  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
    this.router.navigate(['/adminLogin']);
  }


}
