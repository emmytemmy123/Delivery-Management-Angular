import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../Service/photo.service';

@Component({
  selector: 'app-auto-gallery',
  templateUrl: './auto-gallery.component.html',
  styleUrls: ['./auto-gallery.component.css']
})
export class AutoGalleryComponent implements OnInit {

  images!: any[];

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) { }

    ngOnInit() {
        this.photoService.getImages().then(images => this.images = images)
    }

}
