import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/Service/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFile: File | null = null;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        response => {
          console.log('File uploaded successfully', response);
          // Handle the response as needed
        },
        error => {
          console.error('File upload error:', error);
          // Handle the error as needed
        }
      );
    }
  }




}
