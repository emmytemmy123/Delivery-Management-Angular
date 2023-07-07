import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Users } from '../Model/users/users';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:8181/users/add';
  private baseUrl2 = 'http://localhost:8181/users/list';
  private baseUrl3 = 'http://localhost:8181/users/update';
  private baseUrl4 = 'http://localhost:8181/users/delete/{uuid}';
  private baseUrl5 = 'http://localhost:8181/users/get/{uuid}';
  private baseUrl6 = 'http://localhost:8181/users/get/{username}';
  private baseUrl7 = 'http://localhost:8181/users/updateUsers/{username}';


  
  private apiUrl = 'http://localhost:8181/users';



  constructor(private http: HttpClient, private authService: AuthenticationService) { }



  createUsers(users: Object): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}`, users);
  }

  getUsersList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl2}`);
  }

  updateUsers(uuid: string, value: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl3}/${uuid}`, value);
  }

  deleteUsers(uuid: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl4}/${uuid}`);
  }

  getUsersById(uuid: string): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseUrl5}/${uuid}` );
  }

  getUsersByUsername(username: string): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseUrl6}/${username}`);
  }

  updateUsersByUsername(username: string, value: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl7}`, value);
  }






}
