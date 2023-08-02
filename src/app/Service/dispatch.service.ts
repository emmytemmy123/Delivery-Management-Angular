import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../Model/transaction/dispatch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatchService {

  private baseUrl = "http://localhost:8181/transaction/dispatch";
  // private baseUrl2 = "http://localhost:8181/transaction/dispatch/deliveryNo";
  // private baseUrl3 = "  http://localhost:8181/transaction/dispatch/list";
  // private baseUrl5 = 'http://localhost:8181/transaction/dispatch';





  constructor(private http: HttpClient) { }


createDispatch(dispatch: object): Observable<ApiResponse>{
  return this.http.post<ApiResponse>(`${this.baseUrl}/add`, dispatch);
}

getDispatchByDeliveryNo2(deliveryNo: string): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(`${this.baseUrl}/deliveryNo/${deliveryNo}`);
}

getDispatchByDeliveryNo(deliveryNo: string): Observable<any> {
  const params = new HttpParams().set('deliveryNo', deliveryNo);
  return this.http.get(`${this.baseUrl}/deliveryNo`, { params });
}

getDispatchByDispatchName(dispatchName: string): Observable<any> {
  const params = new HttpParams().set('dispatchName', dispatchName);
  return this.http.get(`${this.baseUrl}/dispatchName`, { params });
}

getDispatchList(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(`${this.baseUrl}/list`);
}



}
