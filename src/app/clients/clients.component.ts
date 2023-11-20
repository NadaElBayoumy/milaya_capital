import { Component, OnInit } from '@angular/core';
import { fadeInFromTop , fadeInFromTop1 , slideInFromLeft , slideInFromRight} from '../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [fadeInFromTop , fadeInFromTop1 , slideInFromLeft , slideInFromRight  ]
})

export class ClientsComponent implements OnInit {
  ngOnInit(): void {

  }
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}

