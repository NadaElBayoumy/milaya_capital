import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { fadeInFromTop, enterFromLeft0, enterFromLeft, enterFromLeft2 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInFromTop, enterFromLeft0, enterFromLeft, enterFromLeft2],
})
export class HomeComponent implements AfterViewInit, OnInit {
  isMobile: boolean = false;

  whyChooseContent: any;
  newBusinessHeightsContent: any;
  whatWeDoContent: any;
  ourWorkContent: any;
  welcomeContent: any;

  constructor(private milayaService: MilayaService, private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
    this.milayaService.getHomePageGenericSections().subscribe((page_sections) => {
      let whyChoose = this.milayaService.getObjectById(page_sections, this.milayaService.home_page_sections.why_choose);
      this.whyChooseContent = this.milayaService.removeHtmlTagsPipe.transform(whyChoose?.content?.rendered);
      
      let newBusinessHeights = this.milayaService.getObjectById(page_sections, this.milayaService.home_page_sections.new_business_heights);
      this.newBusinessHeightsContent = this.milayaService.removeHtmlTagsPipe.transform(newBusinessHeights?.content?.rendered);
      
      
      let whatWeDo = this.milayaService.getObjectById(page_sections, this.milayaService.home_page_sections.what_we_do);
      this.whatWeDoContent =this.milayaService.removeHtmlTagsPipe.transform(whatWeDo?.content?.rendered);
      
      let ourWork = this.milayaService.getObjectById(page_sections, this.milayaService.home_page_sections.our_work);
      this.ourWorkContent =  this.milayaService.removeHtmlTagsPipe.transform(ourWork?.content?.rendered);
      
      let welcome = this.milayaService.getObjectById(page_sections, this.milayaService.home_page_sections.welcome);
      this.welcomeContent = this.milayaService.removeHtmlTagsPipe.transform(welcome?.content?.rendered);
    });

  }
  ngAfterViewInit() {
    this.animationStates.enterFromTop = 'visible';
    this.animationStates.enterFromLeft = 'visible';
  }

  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'visible',
    enterFromLeft: 'visible',
    enterFromLeft2: 'hidden',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold values as needed
    const threshold = 50;

    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromLeft = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromLeft2 = window.scrollY > threshold ? 'visible' : 'hidden';
  }
}
