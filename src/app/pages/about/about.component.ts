import { Component, HostListener, OnInit,ChangeDetectorRef } from '@angular/core';
import { enterFromTop, enterFromTop1, enterFromTop2 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [enterFromTop, enterFromTop1, enterFromTop2]
})

export class AboutComponent implements OnInit {
  isMobile: boolean = false;

  leadersInManagementContent: any;
  weAreDynamicContent: any;
  ourVisionContent: any;
  // counters: any;
  clients_partners_trusted:any;
  awards_winning_accquired:any;
  projects_completed_on_24_countries:any;
  isLoading: boolean = true;

  constructor( private cdr: ChangeDetectorRef,private milayaService: MilayaService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
    this.milayaService.getAboutPageSections().subscribe((about_page_sections) => {
      let leadersInManagement = this.milayaService.getObjectById(about_page_sections, this.milayaService.about_page_sections.leaders_in_management);
      this.leadersInManagementContent = this.milayaService.removeHtmlTagsPipe.transform(leadersInManagement?.content?.rendered);

      let weAreDynamic = this.milayaService.getObjectById(about_page_sections, this.milayaService.about_page_sections.we_are_dynamic);
      this.weAreDynamicContent = this.milayaService.removeHtmlTagsPipe.transform(weAreDynamic?.content?.rendered);

      let ourVision = this.milayaService.getObjectById(about_page_sections, this.milayaService.about_page_sections.our_vision);
      this.ourVisionContent = this.milayaService.removeHtmlTagsPipe.transform(ourVision?.content?.rendered);
      this.isLoading = false;
    });

    this.milayaService.getCounters().subscribe((counters: any) => {
      let ret_counters = counters?.acf;
      // Manually trigger change detection
      this.cdr.detectChanges();
      this.clients_partners_trusted = ret_counters.clients_partners_trusted;
      this.awards_winning_accquired = ret_counters.awards_winning_accquired;
      this.projects_completed_on_24_countries = ret_counters.projects_completed_on_24_countries;
      this.isLoading = false;
      
    });
  }
  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
    enterFromTop1: 'hidden',
    enterFromTop2: 'hidden'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold values as needed
    const threshold = 100;
    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop1 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop2 = window.scrollY > threshold ? 'visible' : 'hidden';
  }
}
