import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Users } from '../Model/users/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8181/users/loginUsers';



  constructor(private http: HttpClient) { }


  login(email: string, password: string): Observable<ApiResponse> {

      const body = {
      email: email,
      password: password,
      
    };

    localStorage.setItem("currentUser", JSON.stringify(body));
   
    return this.http.post<ApiResponse>(this.apiUrl, body);
  }


  public welcome(token: string) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<string>("http://localhost:8181/", {headers, responseType: 'text' as 'json' });
  }





  


  getUserProfile(): any {
    return localStorage.getItem("saveUser");
  }








}
