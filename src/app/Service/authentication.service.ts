import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/products/product';
import { LocalStorageService } from './local-storage.service';
import { Users } from '../Model/users/users';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 private loginUrl = 'http://localhost:8181/authenticates';
 private apiUrl = 'http://localhost:8181/users'; 


  constructor(private http: HttpClient, private localServiceStorage: LocalStorageService,
     private storageServiceStorage:SessionStorageService) {}


  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post<any>(this.loginUrl, credentials);
  }

  getUserByUsername(username: string): Observable<Users> {
    const url = `${this.apiUrl}/username/${username}`;
    return this.http.get<Users>(url);
  }

  getUsersList(): Observable<any> {
  return this.http.get('http://localhost:8181/users/list');
  }

  getCurrentUsersDetails() {
    const userFromSession = this.getsession();
    const userUuid:any = userFromSession['uuid']
    return userUuid;
  }

  getToken(): any {
    return this.localServiceStorage.getItem('token');
  }

  getsession(): any {
    return this.storageServiceStorage.getItem('data');
  }


  logout(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('data');
  }





}
