import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/transaction/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

 private baseUrl = "http://localhost:8181/transaction/delivery/add";


  addDelivery(delivery: Object): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}`, delivery);
  }




}
