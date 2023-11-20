import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { enterFromBottom,slideLeftToRight } from '../animations';
@Component({
  selector: 'app-heights-slider',
  templateUrl: './heights-slider.component.html',
  styleUrls: ['./heights-slider.component.scss'],
  animations: [enterFromBottom,slideLeftToRight]
})
export class HeightsSliderComponent implements AfterViewInit {
  title = 'heights';
  currentSlide = 0;


  customOptions: OwlOptions = {
    items: 4,
    loop: true,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    nav: true
  }

  slides = [
    { id: 1, num: "01", icon: "bi bi-arrow-up-right", title: "Project Investment", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-1.svg"},
    { id: 2, num: "02", icon: "bi bi-arrow-down-right", title: "Management", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-2.svg" },
    { id: 3, num: "03", icon: "bi bi-arrow-up-right", title: "Residential and Commercial Property Management", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodaliqua.", img: "../../assets/height-3.svg"},
    { id: 4, num: "04", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-4.svg" },
    { id: 5, num: "05", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-4.svg" },
    { id: 6, num: "06", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-4.svg" },
  ];

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
  }
  
  getAnimationClass(index: number): string {
    // Apply different animations based on the index
    return "animation-slideInFromBottom-" + index;
  }

}
