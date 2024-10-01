import { ChangeDetectorRef, Component,HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {
  constructor(private cdr:ChangeDetectorRef){

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['﹤', '﹥'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  ngOnInit(){
    this.getscreenwidth();
  }
  carouselSlide:number=4
  screenWidth!:number;
  @HostListener('window:resize')
  getscreenwidth() {
    this.screenWidth = window.innerWidth;
    
    if (this.screenWidth > 320 && this.screenWidth <= 480) {
      this.customOptions.responsive = {
        0: { items: 1 }
      };
    } else if (this.screenWidth > 480 && this.screenWidth <= 992) {
      this.customOptions.responsive = {
        0: { items: 1 }
      };
    } else if (this.screenWidth > 992) {
      this.customOptions.responsive = {
        0: { items: 1 }
      };
    }
    this.cdr.detectChanges();
  }
  
}
