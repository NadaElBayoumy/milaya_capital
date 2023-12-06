import { Component, HostListener } from '@angular/core';
import { enterFromBottom1, enterFromBottom2, enterFromBottom3 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MilayaService } from 'src/app/milaya.service';
@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  animations: [enterFromBottom1, enterFromBottom2, enterFromBottom3],
})
export class WhatWeDoComponent {
  isMobile: boolean = false;

  customOptions: OwlOptions = {
    items: 3,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  slides:any = [
    // { id: 1, icon: "bi bi-buildings", title: "Property Letting and Real Estate", description: "In the UK and UAE, we specialize in property leQng and the opera:ons of own or leased real estate. Whether you\'re searching for a new place to call home or seeking professional property management services, our team has you covered. We take pride in helping tenants find their dream proper:es and property owners maximize their investments." },
    // { id: 2, icon: "bi bi-buildings", title: "Restaurant & Dining", description: "In Dubai and Athens, we have a selection of top-notch restaurants that offer culinary delights from around the world. Our experienced chefs and attentive staff ensure that every dining experience is a memorable one. Whether you\'re looking for fine dining or a casual meal with friends and family, we have the perfect venues. Savor the flavors of the Mediterranean and international cuisine at our restaurants. Our talented chefs use only the freshest, locally sourced ingredients to create a culinary master." },
    // { id: 3, icon: "bi bi-buildings", title: "Retail", description: "Our successful businesses in the UK provide our customers with quality and quintessential. British style and global exploration service with a wide range of satisfying services to different tastes and preferences, with its 25 locations all in Central London. From trendy fashion barber shops to specialty coffee shops, we provide our customers with high-quality products and a memorable experience. Our coffee shops are cozy havens where you can enjoy exceptional coffee and breakfast in town in a warm ambiance. From your morning caffeine fix to afternoon meetings or relaxation, our coffee shops are your go-to destination in London." },
  ];

  ngOnInit(): void {
    this.milayaService.getHomePageWhatWeDo().subscribe((what_we_do) => {
      what_we_do.forEach(we_do => {
        this.slides.push({ id: we_do.id, icon: "bi bi-buildings", title: this.milayaService.removeHtmlTagsPipe.transform(we_do?.title?.rendered), description: this.milayaService.removeHtmlTagsPipe.transform(we_do?.content?.rendered) });
      });
    });
  }

  constructor(private milayaService: MilayaService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  //For Animations on Scroll
  animationStates = {
    enterFromBottom1: 'hidden',
    enterFromBottom2: 'hidden',
    enterFromBottom3: 'hidden'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold values as needed
    const threshold = 100;
    // Check the scroll position and update animation states
    this.animationStates.enterFromBottom1 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromBottom2 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromBottom3 = window.scrollY > threshold ? 'visible' : 'hidden';
  }

}
