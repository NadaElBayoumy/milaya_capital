import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MilayaService } from './milaya.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Milaya Capital';
  showNavbar: boolean;
  isMobile: boolean;

  constructor(private toastr: ToastrService, public milayaService: MilayaService, private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.isMobile = this.milayaService.isMobile;
    this.showNavbar = false;
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showNavbar = !this.checkRoute();
    });
  }

  
  checkRoute(): boolean {
    return this.router?.url === '' || this.router?.url === '/home' || this.router?.url === '/contact';
  }
}
