import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/Service/photo.service';

@Component({
  selector: 'app-user-profile-carousel',
  templateUrl: './user-profile-carousel.component.html',
  styleUrls: ['./user-profile-carousel.component.css']
})
export class UserProfileCarouselComponent implements OnInit {

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
