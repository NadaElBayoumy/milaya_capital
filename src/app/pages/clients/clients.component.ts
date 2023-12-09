import { Component, OnInit, HostListener , ViewChild} from '@angular/core';
import { enterFromTop, enterFromTop1 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';
import { OwlOptions,CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [enterFromTop, enterFromTop1]
})

export class ClientsComponent implements OnInit {
  // @ViewChild(CarouselComponent, { static: true }) owlCarousel: CarouselComponent | undefined;
  isLoading: boolean = true;
  slides1: any = [];
  slides2: any = [];
  isMobile: boolean = false;
  threshold = 700;

  // customOptions22: OwlOptions = {
  //   autoplaySpeed : 5000, 
  //   lazyLoad:true,
  //   nav : false,
  //   slideTransition : 'linear',
  
  // }
  // customOptions: OwlOptions = {
  //   skip_validateItems:true,
  //   // navSpeed: 10,
  //   rewind:false,
  //   smartSpeed:10,
  //   center: true,
  //   items:6,
  //   loop:true,
  //   margin:30,
  //   nav:false,
  //   dots:false,
  //   autoplay: true,
  //   autoplayTimeout: 100,
  //   slideTransition: 'linear',
  //   autoplaySpeed: 5000,
  //   autoplayHoverPause: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   freeDrag: false,
  //   rtl:true
  // }

  slideConfig1 = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,
    pauseOnFocus: false,
    draggable: false,
    pauseOnHover: false
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
    pauseOnHover: false
  };

  slickInit(event: Event|any) {
    console.log(event);
    // Additional initialization logic if needed
  }

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
  // onCarouselInitialized(carousel: any) {

  //   console.log(carousel)
  //   this.owlCarousel = carousel;
    
  //   this.startAutoplay();
  // }

  // private startAutoplay() {
  //   if (this.owlCarousel) {
  //     setInterval(() => {
  //       if(this.owlCarousel){
  //         this.owlCarousel.to('next');

  //       }
  //     }, 3000);
  //   }
  // }
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
    this.animationStates.enterFromTop = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop1 = window.scrollY > this.threshold ? 'visible' : 'hidden';
  }

  onMouseEnter(slide: any, index: any): void {
    slide.current = slide.src;
  }

  onMouseLeave(slide: any, index: any): void {
    slide.current = slide.img_grey;
  }


  // divStyle = {
  //   color: 'blue',
  //   'font-size': '16px',
  //   'text-align': 'center',
  //   padding: '10px',
  //   border: '1px solid #ccc',
  // };
  // hoveredSlideIndex: number | null = null;

  // // Hover styles
  // hoverStyle = {
  //   background: '#f0f0f0',
  //   cursor: 'pointer',
  // };

  // Event handlers
  onMouseEnter1(i:any) {
    // this.hoveredSlideIndex = i;
    this.slides1[i].current = this.slides1[i].src;
  }
  // getSlideStyle(index: number) {
  //   return this.hoveredSlideIndex === index
  //     ? { 
  //       transform: 'scale(1.1)'
      
  //     }  // Apply styles for the hovered slide
  //     : { 
        
  //       transform: 'scale(1)'
      
  //     };   // Reset styles for non-hovered slides
  // }
  onMouseLeave1() {
    // Reset to the initial styles when leaving hover
    this.slides1.forEach((slide:any) => {
      slide.current = slide.img_grey;
    });
    // this.divStyle = {
    //   color: 'blue',
    //   'font-size': '16px',
    //   'text-align': 'center',
    //   padding: '10px',
    //   border: '1px solid #ccc',
    // };
  }
}

