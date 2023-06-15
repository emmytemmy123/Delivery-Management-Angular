import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

baseUrl ="http://localhost:8181/sender/upload"

  constructor(private http:HttpClient) { }

  upload(file: string | Blob):Observable<any> {
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseUrl, formData)
}




}
