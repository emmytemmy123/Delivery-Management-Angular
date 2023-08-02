import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient, private storageServiceStorage:SessionStorageService) { }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('http://localhost:8181/uploader/upload/files', formData);
  }


  getImagePreview(filename: string): Observable<string> {
    // Replace 'YOUR_BACKEND_URL' with the actual URL of your backend API for previewing the image
    const backendUrl = `http://localhost:8181/uploader/file/preview?filename=${filename}`;

    return this.http.get(backendUrl, { responseType: 'arraybuffer' }).pipe(
      map((data: ArrayBuffer) => {
        const base64String = btoa(
          new Uint8Array(data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        return 'data:dispatch.jpg;base64,' + base64String;
      })
    );
  }


  getsession(): any {
    return this.storageServiceStorage.getItem('data');
  }

  getCurrentUsersPhoto() {
    const userPhotoFromSession = this.getsession();
    const userPhoto:any = userPhotoFromSession['photo']
    return userPhoto;
  }






}
