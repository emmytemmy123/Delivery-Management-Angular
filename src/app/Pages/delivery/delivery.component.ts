import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { DeliveryService } from 'src/app/Service/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  productForm: any;
  delivery: any;
  response: any;
  usersCategory: any;
  address: any;
  city: any;
  email: any;
  gender: any;
  phone: any;
  name: any;
  username: any;
  userForm: any;
  feedbackMessage:any;


  constructor(public router: Router, private deliveryService: DeliveryService,
     private authService: AuthenticationService,  private formBuilder: FormBuilder) {

      this.createProductForm();


  }

  ngOnInit(): void {

  this.retrieveUserFromSeesion();

    this.createProductForm();

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


  createProductForm() {
    this.productForm = this.formBuilder.group({
      dispatchTo: ['', Validators.required],
      dispatchToAddress: ['', Validators.required],
      paymentMode: ['', Validators.required],
      senderId: ['', Validators.required],
      productList: this.formBuilder.array([])
    });
  }

  saveProducts() {
    const uuidFromSession =  this.authService.getCurrentUsersDetails();
    console.log( "uuid", uuidFromSession);

    if(uuidFromSession){
    if (this.productForm) {
      const formData = this.productForm.value;

      const payload = {
        items: [
          {
            colour: formData.productList[0].colour,
            description: formData.productList[0].description,
            model: formData.productList[0].model,
            name: formData.productList[0].name,
            photo: formData.productList[0].photo,
            quantity: formData.productList[0].quantity,
            status: formData.productList[0].status,
            weight: formData.productList[0].weight
          }
        ],
        paymentMode: formData.paymentMode,
        receiverAddress: formData.dispatchToAddress,
        receiverName: formData.dispatchTo,
        senderId: uuidFromSession
      };
  
      this.deliveryService.addDelivery(payload).subscribe((response => {
        this.response = response;
        this.feedbackMessage = response.data;
        console.log( "response", this.response);

      }))
      console.log('Form Data:', formData);
      this.productForm.reset();
    } else {
      // Handle form validation errors if needed
      console.log('Form is invalid. Cannot save products.');
    }
  }
  }

  
  addProduct() {
    const productGroup = this.formBuilder.group({
      colour: ['', Validators.required],
      model: ['', Validators.required],
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      status: ['', Validators.required],
      weight: ['', Validators.required],
      description: ['']
      // Add more fields for each product as needed
    });
    this.productList.push(productGroup);
  }

  
  get productList() {
    return this.productForm.get('productList') as FormArray;
  }
  

  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
    this.router.navigate(['/login3']);
  }




}


