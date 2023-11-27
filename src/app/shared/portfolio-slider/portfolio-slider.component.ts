import { Component, ElementRef } from '@angular/core';
import { fadeInFromTop1 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-slider',
  templateUrl: './portfolio-slider.component.html',
  styleUrls: ['./portfolio-slider.component.scss'],
  animations: [fadeInFromTop1]
})
export class PortfolioSliderComponent {
  title = 'ng-carousel-demo';
  isMobile: boolean = false;


  constructor(private el: ElementRef, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }


  slides = [
    { id: 1, icon: "bi bi-buildings", title: "Lorem ipsum dolor sit amet ", descr: "2023-2024", img: "../../../assets/portfolio-detail-img-card.svg" },
    { id: 2, icon: "bi bi-buildings", title: "Lorem ipsum dolor sit amet ", descr: "2023-2024", img: "../../../assets/portfolio-detail-img-card.svg" },
    { id: 3, icon: "bi bi-buildings", title: "Lorem ipsum dolor sit amet ", descr: "2023-2024", img: "../../../assets/portfolio-detail-img-card.svg" },
    { id: 4, icon: "bi bi-buildings", title: "Lorem ipsum dolor sit amet ", descr: "2023-2024", img: "../../../assets/portfolio-detail-img-card.svg" },
    { id: 5, icon: "bi bi-buildings", title: "Lorem ipsum dolor sit amet ", descr: "2023-2024", img: "../../../assets/portfolio-detail-img-card.svg" },
    { id: 6, icon: "bi bi-buildings", title: "Lorem ipsum dolor sit amet ", descr: "2023-2024", img: "../../../assets/portfolio-detail-img-card.svg" },
    { id: 7, icon: "bi bi-buildings", title: "Lorem ipsum dolor sit amet ", descr: "2023-2024", img: "../../../assets/portfolio-detail-img-card.svg" },
  ];

  slideConfig = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow:'<div class=""><i class="prv bi bi-chevron-left"></i></div>',
    nextArrow: '<div class=""><i class="nxt bi bi-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };



}

