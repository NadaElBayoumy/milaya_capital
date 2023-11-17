import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fadeInFromTop1
} from '../animations';

@Component({
  selector: 'app-portfolio-slider',
  templateUrl: './portfolio-slider.component.html',
  styleUrls: ['./portfolio-slider.component.scss'],
  animations: [
    fadeInFromTop1
  ]
})
export class PortfolioSliderComponent implements AfterViewInit {
  title = 'ng-carousel-demo';
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slides = [
    { id: 1, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/mission-1.svg" },
    { id: 2, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/mission-2.svg" },
    { id: 3, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/mission-3.svg" },
    { id: 4, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/mission-4.svg" },
    { id: 5, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "https://dummyimage.com/350x150/9a2b7a/fff" },
    { id: 6, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "https://dummyimage.com/350x150/5a2b7a/fff" },
    { id: 7, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "https://dummyimage.com/350x150/4a2b7a/fff" }
  ];

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {

  }

}

