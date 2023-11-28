import { Component, OnInit, HostListener } from '@angular/core';
import { enterFromTop, enterFromTop1 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [enterFromTop, enterFromTop1]
})

export class ClientsComponent {
  slides1 = [
    { id: 6, name: "client1", src: "../../../assets/6.svg"},
    { id: 7, name: "client2", src: "../../../assets/7.svg" },
    { id: 9, name: "client3", src: "../../../assets/9.svg" },
    { id: 8, name: "client4", src: "../../../assets/8.svg" },
    { id: 2, name: "client5", src: "../../../assets/2.svg"},

    { id: 6, name: "client1", src: "../../../assets/6.svg" },
    { id: 7, name: "client2", src: "../../../assets/7.svg" },
    { id: 9, name: "client3", src: "../../../assets/9.svg"},
    { id: 8, name: "client4", src: "../../../assets/8.svg"},
    { id: 2, name: "client5", src: "../../../assets/2.svg"},
  ];

  slides2 = [
    { id: 1, name: "client6", src: "../../../assets/1.svg" },
    { id: 2, name: "client7", src: "../../../assets/2.svg" },
    { id: 4, name: "client8", src: "../../../assets/4.svg" },
    { id: 5, name: "client9", src: "../../../assets/5.svg" },
    { id: 9, name: "client10", src: "../../../assets/9.svg" },

    { id: 1, name: "client6", src: "../../../assets/1.svg" },
    { id: 2, name: "client7", src: "../../../assets/2.svg" },
    { id: 4, name: "client8", src: "../../../assets/4.svg" },
    { id: 5, name: "client9", src: "../../../assets/5.svg" },
    { id: 9, name: "client10", src: "../../../assets/9.svg" },
  ];

  slideConfig1 = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,
    pauseOnFocus: false,
    draggable: false,
    pauseOnHover: true
  };

  slideConfig2 = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    pauseOnFocus: false,
    draggable: false,
    pauseOnHover: true
  };

  isMobile: boolean = false;
  // Threshold values as needed
  threshold = 700;

  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });

    if (this.router?.url == "/about") {
      this.threshold = 700;
    }
    else if (this.router?.url == "/home") {
      this.threshold = 2500;
    }
    else if (this.router?.url == "/mission") {
      this.threshold = 0;
    }
  }

  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
    enterFromTop1: 'hidden',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(window.scrollY)
    // if(this.router?.url == "/mission"){
    //   return;
    // }
    this.animationStates.enterFromTop = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop1 = window.scrollY > this.threshold ? 'visible' : 'hidden';
  }
  onMouseEnter(index: number, sliderNum: number): void {
    if (sliderNum == 1) {
      this.slides1[index].src = "../../../assets/"+ index +"-color.png";
    } else if (sliderNum == 2) {
      this.slides2[index].src = "../../../assets/"+ index +"-color.png";
    }
  }

  onMouseLeave(index: number, sliderNum: number): void {
    if (sliderNum == 1) {
      this.slides1[index].src = "../../../assets/"+ index +".svg";
    } else if (sliderNum == 2) {
      this.slides2[index].src = "../../../assets/"+ index +".svg";
    }
  }
}

