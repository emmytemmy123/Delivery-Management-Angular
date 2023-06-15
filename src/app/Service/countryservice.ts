import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries() {
  return this.http.get<any>('assets/countries.json')
    .toPromise()
    .then((res: { data: any[]; }) => <any[]>res.data)
    .then((data: any) => { return data; });
    
  }
}
