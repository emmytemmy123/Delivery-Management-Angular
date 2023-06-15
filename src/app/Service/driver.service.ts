import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Driver } from '../Model/users/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseURL = "http://localhost:8181/users/driver/list";
  private baseURL1 = "http://localhost:8181/users/driver/add";
  private baseURL2 = "http://localhost:8181/users/driver/driverDelete/{id}";
  private baseURL3 = "http://localhost:8181/users/image/add";


  constructor(private http: HttpClient) { }


  getDriverList(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseURL}`);
  }

  saveDriver(driver: Driver): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.baseURL1}`, driver);
  }

  getDriverById(uuid: String): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseURL}/${uuid}`);
  }

  updateDriver(uuid: String, driver: Driver): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(`${this.baseURL}/${uuid}`, driver);
  }

  deleteDriver(uuid: String): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.baseURL2}/${uuid}`);
  }



}
