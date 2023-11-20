import { Component , Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-we-are-img-text-card',
  templateUrl: './we-are-img-text-card.component.html',
  styleUrls: ['./we-are-img-text-card.component.scss']
})
export class WeAreImgTextCardComponent {
  @Input() WeAreTitleCard!: string;
  @Input() WeAreDescriptionCard!: string;
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
