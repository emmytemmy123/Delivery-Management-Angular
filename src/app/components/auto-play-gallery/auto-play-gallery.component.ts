import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../Service/photo.service';

@Component({
  selector: 'app-auto-play-gallery',
  templateUrl: './auto-play-gallery.component.html',
  styleUrls: ['./auto-play-gallery.component.css']
})
export class AutoPlayGalleryComponent implements OnInit {

  images!: any[];

  autoplay!: any[];

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
