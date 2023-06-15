import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api/messageservice';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  uploadedFiles: any[] = [];

  //constructor(private messageService: MessageService) {}
  
  ngOnInit(): void {
  }

  onUpload(event: { files: any; }) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      //this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  
}
