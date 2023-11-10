import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-mission-slider',
  templateUrl: './mission-slider.component.html',
  styleUrls: ['./mission-slider.component.scss'],
})
export class MissionSliderComponent implements AfterViewInit {
  private swiper: Swiper|any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.el.nativeElement.querySelector('.swiper-container'), {
      // Swiper options here...
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  
  items = [
    { image: 'path/to/image1.jpg', title: 'Slide 1', description: 'Description for slide 1' },
    { image: 'path/to/image2.jpg', title: 'Slide 2', description: 'Description for slide 2' },
    { image: 'path/to/image3.jpg', title: 'Slide 3', description: 'Description for slide 3' }
  ];

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
}
