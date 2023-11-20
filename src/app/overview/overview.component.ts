import { Component , Input } from '@angular/core';
import { slideFromTop ,slideFromTop2} from '../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [    slideFromTop ,slideFromTop2  ],
})

export class OverviewComponent {
  @Input() pageTitle!: string;
  @Input() pageOverviewText!: string;
  @Input() direction!: string;
  @Input() light! :string;
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
