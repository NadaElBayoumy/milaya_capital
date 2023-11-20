import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-why-choose-card',
  templateUrl: './why-choose-card.component.html',
  styleUrls: ['./why-choose-card.component.scss']
})
export class WhyChooseCardComponent {
  @Input() src!: string;
  @Input() title!: string;
  @Input() description!: string;
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
