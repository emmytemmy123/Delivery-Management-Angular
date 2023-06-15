import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private apiUrl = "http://localhost:8181/users";


  constructor(private http: HttpClient) { }

  public generateToken(request: any) {
    return this.http.post<string>("http://localhost:8181/appUserauthenticates", request, {  responseType: 'text' as 'json' });
  }

  public authourization(token: string) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<string>("http://localhost:8181/users/list", {headers, responseType: 'text' as 'json' });
  }
 




}
