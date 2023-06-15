import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessTokenDataService {

  apiUrl = 'http://localhost:8181';

  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.http.get(`${this.apiUrl}/${endpoint}`, { headers });
  }


}
