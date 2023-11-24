import { Component, HostListener } from '@angular/core';
import { enterFromTop, enterFromTop2, enterFromRight, enterFromTop3, enterFromRight2 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [enterFromTop, enterFromTop2, enterFromRight, enterFromTop3, enterFromRight2]
})
export class FooterComponent {
  userEmail: string = '';
  isMobile: boolean = false;
  // Threshold values as needed
  threshold = 300;

  constructor(private toastr: ToastrService, private router: Router, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });

    if (this.router?.url == "/home") {
      this.threshold = 3400;
    }
    else if (this.router?.url == "/about") {
      this.threshold = 2100;
    }
    else if (this.router?.url == "/mission") {
      this.threshold = 1400;
    }
    else if (this.router?.url == "/portfolio") {
      this.threshold = 600;
    }
    else if (this.router?.url == "/contact") {
      this.threshold = 450;
    }

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
    // this.showSuccess();
  }


  showSuccess() {
    this.toastr.success('Your Email is subscribed sucessfully to Milaya Capital news letter', '');
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
    // console.log(window.scrollY)
    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop2 = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop3 = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromRight = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromRight2 = window.scrollY > this.threshold ? 'visible' : 'hidden';
  }

}
