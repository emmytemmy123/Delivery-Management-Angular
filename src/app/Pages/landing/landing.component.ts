import { Component, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../Service/app.layout.service';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styles: [`
    
        #hero{
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);
            height:700px;
            overflow:hidden;
        }

        .pricing-card:hover{
            border:2px solid var(--cyan-200) !important;
        }

        @media screen and (min-width: 768px) {
            #hero{
                -webkit-clip-path: ellipse(150% 87% at 93% 13%);
                clip-path: ellipse(150% 87% at 93% 13%);
                height: 530px;
            }
        }

        @media screen and (min-width: 1300px){
            #hero > img {
                position: absolute;
                transform:scale(1.2);
                top:15%;
            }

        #hero > div > p {
                max-width: 450px;
            }
        }

        @media screen and (max-width: 1300px){
            #hero {
                height: 600px;
            }

        #hero > img {
            position:static;
            transform: scale(1);
            margin-left: auto;
        }

        #hero > div {
            width: 100%;
        }

        #hero > div > p {
                width: 100%;
                max-width: 100%;
            }
        }
    `]
})
export class LandingComponent {
    usersCategory: any;
    address: any;
    city: any;
    email: any;
    gender: any;
    phone: any;
    name: any;
    username: any;


   
    isHovered1 = false;
    isHovered2 = false;
    isHovered3 = false;
    isHovered4 = false;
    isHovered5 = false;
    isHovered6 = false;

    


    constructor(public layoutService: LayoutService, public router: Router, 
         private authService:AuthenticationService) { }

         header_variable = false;
         isFlipped = false;


         toggleFlip() {
            this.isFlipped = !this.isFlipped;
          }


         @HostListener('window:scroll', ['$event'])
         onScroll(event: Event): void {
           if (window.scrollY > 0) {
             this.isFlipped = true; // Scrolling down
           } else {
             this.isFlipped = false; // Scrolling up
           }
         }










}
