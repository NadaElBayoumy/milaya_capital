import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fadeInFromTop2 } from '../animations';

@Component({
  selector: 'app-mission-slider',
  templateUrl: './mission-slider.component.html',
  styleUrls: ['./mission-slider.component.scss'],
  animations: [fadeInFromTop2]
})
export class MissionSliderComponent implements AfterViewInit {
  title = 'mission slider';

  customOptions: OwlOptions = {
    items: 4,
    loop: true,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    nav: true
  }

  slides = [
    { id: 1, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "real estate agent, rent house, mls listings, land for sale, houses for rent, realtor", img: "../../assets/mission-1.svg" },
    { id: 2, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "real estate agent, rent house, mls listings, land for sale, houses for rent, realtor", img: "../../assets/mission-2.svg" },
    { id: 3, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "real estate agent, rent house, mls listings, land for sale, houses for rent, realtor", img: "../../assets/mission-3.svg" },
    { id: 4, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "real estate agent, rent house, mls listings, land for sale, houses for rent, realtor", img: "../../assets/mission-4.svg" },
    { id: 5, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "real estate agent, rent house, mls listings, land for sale, houses for rent, realtor", img: "../../assets/mission-1.svg" },
    { id: 6, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "real estate agent, rent house, mls listings, land for sale, houses for rent, realtor", img: "../../assets/mission-2.svg" },
    { id: 7, icon: "bi bi-buildings", title: "REAL ESTATE", descr: "real estate agent, rent house, mls listings, land for sale, houses for rent, realtor", img: "../../assets/mission-3.svg" },
  ];

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {

  }


  getAnimationClass(index: number): string {
    // Apply different animations based on the index
    return "animation-slideIn-" + index;
  }

}
