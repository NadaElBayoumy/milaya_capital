import { Component, HostListener, OnInit } from '@angular/core';
import { enterFromTop, enterFromTop2, enterFromRight, enterFromTop3, enterFromRight2 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MilayaService } from 'src/app/milaya.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [enterFromTop, enterFromTop2, enterFromRight, enterFromTop3, enterFromRight2]
})
export class FooterComponent implements OnInit {
  userEmail: string = '';
  isMobile: boolean = false;
  threshold = 300;
  address: any;
  company_email: any;
  footer_paragraph: any;
  facebook: any;
  instagram: any;
  twitter: any;

  constructor(private milayaService: MilayaService, private toastr: ToastrService, private router: Router, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });

    if (this.router?.url == "/home") {
      this.threshold = 3400;
    }
    else if (this.router?.url == "/about") {
      this.threshold = 1800;
    }
    else if (this.router?.url == "/mission" && !this.isMobile) {
      this.threshold = 1000;
    }
    else if (this.router?.url == "/mission" && this.isMobile) {
      this.threshold = 800;
    }
    else if (this.router?.url == "/portfolio") {
      this.threshold = 400;
    }
    else if (this.router?.url == "/contact") {
      this.threshold = 200;
    }
  }

  ngOnInit(): void {
    this.milayaService.getContactInfo().subscribe((contact_info) => {
      console.log(contact_info)
      this.address = contact_info.acf?.address;
      this.company_email = contact_info.acf?.company_email;
      this.footer_paragraph = contact_info.acf?.footer_paragraph;

      this.facebook = contact_info.acf?.facebook;
      this.twitter = contact_info.acf?.twitter;
      this.instagram = contact_info.acf?.instagram;
    });
  }
  isEmailInvalid(): boolean {
    if (this.userEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.userEmail)) {
      // this.showSuccess();
      return true;
    } else {
      return false;
    }
  }

  onSendMail(): any {
    this.toastr.success('Your Email is subscribed sucessfully to Milaya Capital news letter', '');
  }

  navigateToSocialMediaURL(social_media: any) {
    console.log(social_media)
    if (social_media == "instagram") {
      window.location.href = this.instagram;
    } else if (social_media == "twitter") {
      window.location.href = this.twitter;
    } else if (social_media == "facebook") {
      window.location.href = this.facebook;
    }
  }

  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
    enterFromTop2: 'hidden',
    enterFromTop3: 'hidden',
    enterFromRight: 'hidden',
    enterFromRight2: 'hidden',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {

    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop2 = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop3 = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromRight = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromRight2 = window.scrollY > this.threshold ? 'visible' : 'hidden';
  }

}
