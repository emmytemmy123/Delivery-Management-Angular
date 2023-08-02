import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/transaction/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = "http://localhost:8181/transaction/payment";
  private apiUrl = 'http://localhost:8181/transaction/payment';


  
  constructor(private http: HttpClient) { }


createPayment(payment: object): Observable<ApiResponse>{
  return this.http.post<ApiResponse>(`${this.baseUrl}/add`, payment);
}

getPaymentList(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(`${this.baseUrl}/list`);
}

getPaymentByDeliveryNo(deliveryNo: string): Observable<any> {
  const params = new HttpParams().set('deliveryNo', deliveryNo);
  return this.http.get(`${this.baseUrl}/deliveryNo`, { params });
}

updatePayment(paymentUuid: string, payload: any): Observable<any> {
  const url = `${this.apiUrl}/update/${paymentUuid}`;
  return this.http.put<any>(url, payload);
}




}
