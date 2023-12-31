import { Component, ElementRef, OnInit } from '@angular/core';
import { fadeInFromTop1 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';

@Component({
  selector: 'app-portfolio-slider',
  templateUrl: './portfolio-slider.component.html',
  styleUrls: ['./portfolio-slider.component.scss'],
  animations: [fadeInFromTop1]
})
export class PortfolioSliderComponent implements OnInit {
  title = 'ng-carousel-demo';
  isMobile: boolean = false;
  isLoading: boolean = true;


  slideConfig = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<div class=""><i class="prv bi bi-chevron-left"></i></div>',
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

  slides:any = [];

  constructor(private milayaService:MilayaService, private el: ElementRef, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
        this.milayaService.getPortfolioById(params.id).subscribe((portfolio: any) => {
          let media_urls = portfolio.acf?.media_urls.split(",");
          media_urls.forEach((media_url:any) => {
            this.slides.push( { id: 1, icon: "bi bi-buildings", title: "Lorem ipsum dolor sit amet ", descr: "2023-2024", img: media_url });
            this.isLoading = false;
          });
         })
      });
  }
}

