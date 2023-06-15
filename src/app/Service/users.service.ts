import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:8181/users/add';
  private baseUrl2 = 'http://localhost:8181/users/list';
  private baseUrl3 = 'http://localhost:8181/users/update/{id}';
  private baseUrl4 = 'http://localhost:8181/users/delete/{id}';
  private baseUrl5 = 'http://localhost:8181/users/get/{id}';


  constructor(private http: HttpClient) { }

  createUsers(users: Object): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}`, users);
  }

  getUsersList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl2}`);
  }

  updateUsers(uuid: number, value: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl3}/${uuid}`, value);
  }

  deleteUsers(uuid: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl4}/${uuid}`);
  }

  getUsersById(uuid: string): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseUrl5}/${uuid}`);
  }




}
