import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/products/product';

@Injectable()
export class ProductService {


    constructor(private http: HttpClient) { }

   

    getProducts() {
        return this.http.get<any>('http://localhost:8181/users/customer/list')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

  

  
}