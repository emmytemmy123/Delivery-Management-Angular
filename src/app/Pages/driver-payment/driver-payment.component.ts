import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Payment } from 'src/app/Model/transaction/payment';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { DispatchService } from 'src/app/Service/dispatch.service';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-driver-payment',
  templateUrl: './driver-payment.component.html',
  styleUrls: ['./driver-payment.component.css']
})
export class DriverPaymentComponent implements OnInit {

  disp: any[] = [];
  
  payment!: Payment;
  payments!: Payment[];

  dispatchDeliveryNo!: string;
  DeliveryNo!: string;

  selectedPayments!: Payment[];

  usersCategory: any; address: any; city: any; email: any; gender: any; phone: any; name: any; username: any; deliveryNo: any; 
  responseMessage: any;



  constructor(private authService: AuthenticationService, private route: ActivatedRoute, public router:Router,
    private dispatchService: DispatchService, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.retrieveUserFromSeesion();
    this.getPaymentByDeliveryNo();
    
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

  getPaymentByDeliveryNo(){
    this.deliveryNo = this.route.snapshot.params['deliveryNo'];
      console.log(this.deliveryNo);
    
      if(this.deliveryNo){
        this.paymentService.getPaymentByDeliveryNo(this.deliveryNo).subscribe((response) => {

          if(response.message=='Success'){
            // this.disp = response["data"]
            this.disp = [response["data"]];
          }else{
            this.disp =[]
          }
        
          },
          (error) => {
            console.error('Error fetching payment :', error);
          }
        );
      }
  }


  paymentList(){
    this.paymentService.getPaymentList().subscribe(response => {
      if(response.code=='200'){
        this.payments = response["data"]
      }else{
        this.payments =[]
      }
    });
  }


  makePayment(){
    const uuidFromSession = this.authService.getCurrentUsersDetails();
    console.log(uuidFromSession);
  
    if (uuidFromSession) {
     
          const payload = {
            deliveryNo: this.deliveryNo,
            dispatchDeliveryNo: this. dispatchDeliveryNo,
          };
  
          this.paymentService.createPayment(payload).subscribe((response) => {
            if(response.code == "200"){
              this.responseMessage = ("Payment is Successful");
            }else{
              this.responseMessage = ("Payment is already made");
            }
            },
            (error) => {
              console.error('Error making payment:', error);
            }
          );
        this.clear();
      } 

  }

  paymentNavigate(deliveryNo: any){
    this.router.navigate(['payment', deliveryNo]);
  }



  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
    this.router.navigate(['/adminLogin']);
  }

  clear(){
    this.deliveryNo = '';
    this.dispatchDeliveryNo = '';
  }




}
