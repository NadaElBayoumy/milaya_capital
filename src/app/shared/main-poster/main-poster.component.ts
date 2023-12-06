import { Component, Input } from '@angular/core';
import { fadeInFromBottomTy20 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-main-poster',
  templateUrl: './main-poster.component.html',
  styleUrls: ['./main-poster.component.scss'],
  animations: [fadeInFromBottomTy20],

})
export class MainPosterComponent {
  isMobile: boolean = false;
  @Input() welcomeContent!:string;
  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
