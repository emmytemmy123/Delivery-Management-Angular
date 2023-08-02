import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Delivery } from 'src/app/Model/transaction/delivery';
import { Dispatch } from 'src/app/Model/transaction/dispatch';
import { Users } from 'src/app/Model/users/users';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { DeliveryService } from 'src/app/Service/delivery.service';
import { DispatchService } from 'src/app/Service/dispatch.service';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-driver-dispatch',
  templateUrl: './driver-dispatch.component.html',
  styleUrls: ['./driver-dispatch.component.css']
})
export class DriverDispatchComponent implements OnInit {

 
  dispatchName!: string;
  deliveryNo!: string;
  driverEmail!: string;
  
  responseMessage!: string;

  disp: any[] = []; // Array to hold the response data


  dispatchs!: Dispatch;
  dispatches!: Dispatch[];

  users!: Users;

  selectedDispatches!: Dispatch[];
  selecteddispatchResponse!: any[];

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

  userForm: any;
  formBuilder: any;


  constructor(private dispatchService : DispatchService, private authService: AuthenticationService,
     private deliveryService: DeliveryService, private usersService: UsersService, private route: ActivatedRoute,
     public router:Router ) { }


  ngOnInit(): void {
  this.retrieveUserFromSeesion();
  this.DispatchList();
  this.getDispatchByDeliveryNo();
  this.getDispatchByDispatchName();


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
              this.responseMessage = ("Product delivery is in Progress");
            }else{
              this.responseMessage = ("This Delivery Order is already in progress");
            }
            },
            (error) => {
              console.error('Error creating dispatch:', error);
            }
          );
        this.clear();
      } 
    }
  

    getDispatchByDeliveryNo() {
      this.deliveryNo = this.route.snapshot.params['deliveryNo'];
      console.log(this.deliveryNo);
    
      if(this.deliveryNo){
        this.dispatchService.getDispatchByDeliveryNo(this.deliveryNo).subscribe((response) => {

          if(response.message=='Success'){
            this.dispatchs = response["data"]
            console.log('res:', this.dispatchs);
          }else{
            this.dispatches =[]
          }
        
          },
          (error) => {
            console.error('Error fetching delivery order:', error);
          }
        );
      }
    }

    getDispatchByDispatchName() {
      // this.dispatchName = this.route.snapshot.params['dispatchName'];
      // console.log(this.dispatchName);

      const dispatchName = this.authService.getCurrentUserName();
      console.log(dispatchName);
    
      if(dispatchName){
        this.dispatchService.getDispatchByDispatchName(dispatchName).subscribe((response) => {

          if(response.message=='Success'){
            this.disp = response["data"]
            console.log('res:', this.disp);
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
    

  DispatchList(){
    this.dispatchService.getDispatchList().subscribe(response => {
      if(response.code=='200'){
        this.dispatches = response["data"]
      }else{
        this.dispatches =[]
      }
    });
  }


  paymentNavigate(deliveryNo: string){
    this.router.navigate(['driverPayment', deliveryNo]);
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
