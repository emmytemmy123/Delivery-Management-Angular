import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/transaction/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

 private baseUrl = "http://localhost:8181/transaction/delivery";
 private apiUrl = 'http://localhost:8181/transaction/delivery/findDeliveryBySender';



  addDelivery(delivery: Object): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/add`, delivery);
  }

  getDeliveryByDeliveryNo(deliveryNo: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/deliveryNo/${deliveryNo}`);
  }

  getDeliveryBySenderUuid(deliveryUuid: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?deliveryUuid=${deliveryUuid}`);
  }

  getDeliveryList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/list`);
  }



}
