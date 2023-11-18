import { Component, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fadeInFromTop1} from '../animations';

@Component({
  selector: 'app-portfolio-slider',
  templateUrl: './portfolio-slider.component.html',
  styleUrls: ['./portfolio-slider.component.scss'],
  animations: [    fadeInFromTop1  ]
})
export class PortfolioSliderComponent {
  title = 'ng-carousel-demo';
  customOptions: OwlOptions = {
    items:3,
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
      }
      ,
      940: {
        items: 4
      }
    },
    nav: true
  }

  slides = [
    { id: 1, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/portfolio-detail-img-card.svg" },
    { id: 2, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/portfolio-detail-img-card.svg" },
    { id: 3, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/portfolio-detail-img-card.svg" },
    { id: 4, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/portfolio-detail-img-card.svg" },
    { id: 5, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/portfolio-detail-img-card.svg" },
    { id: 6, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img: "../../assets/portfolio-detail-img-card.svg" },
    { id: 7, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "2023-2024", img:"../../assets/portfolio-detail-img-card.svg" },
    {},
  ];

  constructor(private el: ElementRef) { }

}

