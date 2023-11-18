import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { enterFromBottom } from '../animations';
@Component({
  selector: 'app-heights-slider',
  templateUrl: './heights-slider.component.html',
  styleUrls: ['./heights-slider.component.scss'],
  animations: [enterFromBottom]
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
    { id: 1, num: "01", icon: "bi bi-arrow-up-right", title: "Project Investment", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-1.svg", animation: "slideAnimation1" },
    { id: 2, num: "02", icon: "bi bi-arrow-down-right", title: "Management", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-2.svg", animation: "slideAnimation2" },
    { id: 3, num: "03", icon: "bi bi-arrow-up-right", title: "Residential and Commercial Property Management", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodaliqua.", img: "../../assets/height-3.svg", animation: "slideAnimation1" },
    { id: 4, num: "04", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-4.svg", animation: "slideAnimation1" },
    { id: 5, num: "05", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-4.svg", animation: "slideAnimation2" },
    { id: 6, num: "06", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "../../assets/height-4.svg", animation: "slideAnimation1" },
  ];

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
  }

  getAnimationClass(index: number): string {
    return index === this.currentSlide ? 'show' : '';
  }
  onSlide(event: any) {
    this.currentSlide = event.current;
  }
}
