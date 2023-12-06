import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { enterFromBottom, enterFromLeft } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';
@Component({
  selector: 'app-heights-slider',
  templateUrl: './heights-slider.component.html',
  styleUrls: ['./heights-slider.component.scss'],
  animations: [enterFromBottom, enterFromLeft]
})
export class HeightsSliderComponent implements OnInit {
  title = 'heights';
  currentSlide = 0;
  isAnimationVisible = false;
  isMobile: boolean = false;

  constructor(private milayaService: MilayaService, private el: ElementRef, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }


  customOptions: OwlOptions = {
    items: 4,
    loop: true,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 4
      }
    }
  }

  slides:any = [
    // { id: 1, num: "01", icon: "bi bi-arrow-up-right", title: "Project Investment", descr: "", img: "../../../assets/height-1.svg" },
    // { id: 2, num: "02", icon: "bi bi-arrow-down-right", title: "Management", descr: "", img: "../../../assets/height-2.svg" },
    // { id: 3, num: "03", icon: "bi bi-arrow-up-right", title: "Residential and Commercial Property Management", descr: "", img: "../../../assets/height-3.svg" },
    // { id: 4, num: "04", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "", img: "../../../assets/height-4.svg" },
    // { id: 5, num: "05", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "", img: "../../../assets/height-4.svg" },
    // { id: 6, num: "06", icon: "bi bi-arrow-up-right", title: "Provider: Leading", descr: "", img: "../../../assets/height-4.svg" },
  ];


  ngOnInit(): void {
    this.milayaService.getHomeBusinessHeightsSlider().subscribe((business_heights) => {
      business_heights.forEach(business => {
        this.milayaService.getFeaturedImageUrl(business.featured_media).subscribe((media_ret: any) => {
          let img = media_ret.source_url;
          this.slides.push({ id: business.id, num: "01", icon: "bi bi-buildings", title: this.milayaService.removeHtmlTagsPipe.transform(business?.title?.rendered), descr: this.milayaService.removeHtmlTagsPipe.transform(business?.content?.rendered), img: img });
        });
      });
    });
  }

  getAnimationClass(index: number): string {
    // Apply different animations based on the index
    return "animation-slideInFromBottom-" + index;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold values as needed
    const threshold = 1200;
    this.isAnimationVisible = window.scrollY > threshold ? true : false;
  }
}
