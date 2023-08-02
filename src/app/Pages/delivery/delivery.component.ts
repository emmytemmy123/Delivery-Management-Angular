import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/products/product';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { DeliveryService } from 'src/app/Service/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  selectedProductList:any;
  productForm: any;

  product!: Product[];

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

  paymentMode!: any[];


  constructor(public router: Router, private deliveryService: DeliveryService,
     private authService: AuthenticationService,  private formBuilder: FormBuilder) {

      this.paymentMode=[
      {name: "cash"},
      {name: "transfer"}
      ]


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


  saveProducts2() {
    const uuidFromSession =  this.authService.getCurrentUsersDetails();
    console.log( "uuid", uuidFromSession);

    if(uuidFromSession){
    if (this.productForm) {
      const formData = this.productForm.value;

      const payload = {
        items: [
          {
            colour: formData.productList[10].colour,
            description: formData.productList[10].description,
            model: formData.productList[10].model,
            name: formData.productList[10].name,
            photo: formData.productList[10].photo,
            quantity: formData.productList[10].quantity,
            status: formData.productList[10].status,
            weight: formData.productList[10].weight
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



  saveProducts() {
    const uuidFromSession = this.authService.getCurrentUsersDetails();
    console.log("uuid", uuidFromSession);
  
    if (uuidFromSession) {
      if (this.productForm) {
        const formData = this.productForm.value;
  
        const items = formData.productList.map((product: any) => {
          return {
            colour: product.colour,
            description: product.description,
            model: product.model,
            name: product.name,
            photo: product.photo,
            quantity: product.quantity,
            status: product.status,
            weight: product.weight
          };
        });
  
        const payload = {
          items: items,
          paymentMode: formData.paymentMode,
          receiverAddress: formData.dispatchToAddress,
          receiverName: formData.dispatchTo,
          senderId: uuidFromSession
        };
  
        this.deliveryService.addDelivery(payload).subscribe(
          (response) => {

            if(response.code == "200"){
              this.feedbackMessage = "Your Delivery Order is Successful"
            }
            else{
              this.feedbackMessage = "Order Decline"
            }

          },
          (error) => {
            console.error("Error adding delivery:", error);
            // Handle error appropriately (e.g., show error message to the user)
          }
        );
  
        console.log("Form Data:", formData);
        this.productForm.reset();
      } else {
        // Handle form validation errors if needed
        console.log("Form is invalid. Cannot save products.");
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
    });
    this.productList.push(productGroup);
  }


    // Method to remove a product from the product list form array
    removeProduct(index: number) {
      this.productList.removeAt(index);
    }
    
  
  get productList(): FormArray {
    return this.productForm.get('productList') as FormArray;
  }
  

  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
    this.router.navigate(['/home']);
  }


  dispatchDelivery(){
    const name = this.authService.getCurrentUserName();
    console.log(name);
    this.router.navigate(['openDelivery', name]);
  }





}


