import { Component, OnInit, HostListener } from '@angular/core';
import { enterFromTop, enterFromTop1 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [enterFromTop, enterFromTop1]
})

export class ClientsComponent implements OnInit {
  isLoading: boolean = true;
  slides1: any = [
    // { id: 1, name: "Ted Baker", src: "../../../assets/1-.svg" },
    // { id: 2, name: "Black Penny", src: "../../../assets/2-.svg" },
    // { id: 3, name: "Mileo Jets", src: "../../../assets/3-.svg" },
    // { id: 4, name: "Mileo Hotels", src: "../../../assets/4-.svg" },
    // { id: 5, name: "Oxotech", src: "../../../assets/5-.svg" },

    // { id: 1, name: "Ted Baker", src: "../../../assets/1-.svg" },
    // { id: 2, name: "Black Penny", src: "../../../assets/2-.svg" },
    // { id: 3, name: "Mileo Jets", src: "../../../assets/3-.svg" },
    // { id: 4, name: "Mileo Hotels", src: "../../../assets/4-.svg" },
    // { id: 5, name: "Oxotech", src: "../../../assets/5-.svg" },
  ];

  slides2: any = [
    // { id: 2, name: "Black Penny", src: "../../../assets/2-.svg" },
    // { id: 5, name: "Oxotech", src: "../../../assets/5-.svg" },
    // { id: 6, name: "Dbone", src: "../../../assets/6-.svg" },
    // { id: 7, name: "Skull head", src: "../../../assets/7-.svg" },
    // { id: 8, name: "Milaya Energy", src: "../../../assets/8-.svg" },
    // { id: 3, name: "Milaya Jets", src: "../../../assets/3-.svg" },

    // { id: 2, name: "Black Penny", src: "../../../assets/2-.svg" },
    // { id: 5, name: "Oxotech", src: "../../../assets/5-.svg" },
    // { id: 6, name: "Dbone", src: "../../../assets/6-.svg" },
    // { id: 7, name: "Skull head", src: "../../../assets/7-.svg" },
    // { id: 8, name: "Milaya Energy", src: "../../../assets/8-.svg" },
    // { id: 3, name: "Milaya Jets", src: "../../../assets/3-.svg" },
  ];

  slideConfig1 = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,
    pauseOnFocus: false,
    draggable: false,
    // pauseOnHover: true
  };

  slideConfig2 = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    pauseOnFocus: false,
    draggable: false,
    // pauseOnHover: true
  };

  isMobile: boolean = false;
  // Threshold values as needed
  threshold = 700;

  constructor(private milayaService: MilayaService, private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
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


  ngOnInit() {
    this.milayaService.getClients(1).subscribe((clients1: any) => {
      clients1.forEach((client: any) => {
        this.milayaService.getFeaturedImageUrl(client.featured_media).subscribe((media_ret: any) => {
          let img_colored = media_ret.source_url;
          this.milayaService.getFeaturedImageUrl(client?.acf?.grey_scale_image).subscribe((media_ret: any) => {
            let img_grey = media_ret.source_url;
            this.slides1.push({ id: client.id, name: client.title?.rendered, src: img_colored, img_grey: img_grey, current: img_grey });
            this.isLoading = false;
          });
        });
      });
    });

    this.milayaService.getClients(2).subscribe((clients2: any) => {
      clients2.forEach((client: any) => {
        this.milayaService.getFeaturedImageUrl(client.featured_media).subscribe((media_ret: any) => {
          let img_colored = media_ret.source_url;
          this.milayaService.getFeaturedImageUrl(client?.acf?.grey_scale_image).subscribe((media_ret: any) => {
            let img_grey = media_ret.source_url;
            this.slides2.push({ id: client.id, name: client.title?.rendered, src: img_colored, img_grey: img_grey, current: img_grey });
            this.isLoading = false;
          });
        });
      });
    });
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

  onMouseEnter(slide: any, index: any): void {
    slide.current = slide.src;
  }

  onMouseLeave(slide: any, index: any): void {
    slide.current = slide.img_grey;
  }
}

