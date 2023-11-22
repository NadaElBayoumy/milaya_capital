import { Injectable } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Injectable({
  providedIn: 'root'
})
export class MilayaService {
  sideMenuOpen: boolean;
  isMobile: boolean ;
  
  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.sideMenuOpen = false;
    this.isMobile = false;

    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;

    });
  }

  checkRoute(): boolean {
    return this.router?.url === '' || this.router?.url === '/home' || this.router?.url === '/contact';
  }

}
