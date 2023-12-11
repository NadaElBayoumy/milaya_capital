import { Component, OnInit, HostListener, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { enterFromTop, enterFromTop1 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [enterFromTop, enterFromTop1]
})

export class ClientsComponent implements OnInit {
  @ViewChildren('slickItem') slickItems: any;
  isLoading: boolean = true;
  slides1: any = [];
  slides2: any = [];
  isMobile: boolean = false;
  threshold = 700;

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

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2, private el: ElementRef, private milayaService: MilayaService, private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
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


  afterChange(changeEvent: any) {
    let last_src :any;
    if (changeEvent?.event?.target) {
      const elements = changeEvent.event.target.getElementsByClassName("slick-cloned") as HTMLElement[];
      for (const element of elements) {
        if (!element.classList.contains('listen')) {
          element.classList.add('listen')
          element.addEventListener('mouseenter', (clickEvent: any) => {
            let slide_should_be = (clickEvent?.toElement?.attributes["data-slick-index"]?.value - this.slides1.length);
            this.slides1[slide_should_be].current = this.slides1[slide_should_be].src;
            let targetImage = clickEvent.currentTarget.getElementsByClassName('logo-img');
            targetImage = targetImage[0].querySelector("img");
            last_src = targetImage.getAttribute("src");
            targetImage.setAttribute("src", this.slides1[slide_should_be].src);
          });

          element.addEventListener('mouseleave', (clickEvent: any) => {
            let targetImage = clickEvent.currentTarget.getElementsByClassName('logo-img');
            targetImage = targetImage[0].querySelector("img");
            targetImage.setAttribute("src", last_src);
          });
        }
      }
    }

  }

  ngOnInit() {
    this.milayaService.getAllClients().subscribe((clients1: any) => {
      clients1.forEach((client: any) => {
        this.milayaService.getFeaturedImageUrl(client.featured_media).subscribe((media_ret: any) => {
          let img_colored = media_ret.source_url;
          this.milayaService.getFeaturedImageUrl(client?.acf?.grey_scale_image).subscribe((media_ret: any) => {
            let img_grey = media_ret.source_url;
            if (client.acf?.which_slider == "First Slider") {
              this.slides1.push({ id: client.id, name: client.title?.rendered, src: img_colored, img_grey: img_grey, current: img_grey });
            } else if (client.acf?.which_slider == "Second Slider") {
              this.slides2.push({ id: client.id, name: client.title?.rendered, src: img_colored, img_grey: img_grey, current: img_grey });
            }
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
    console.log(index)
    slide.current = slide.src;
  }

  onMouseLeave(slide: any, index: any): void {
    console.log(index)
    slide.current = slide.img_grey;
  }

}

