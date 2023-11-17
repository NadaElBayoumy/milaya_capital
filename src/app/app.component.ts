import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Milaya Capital';
  showNavbar: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showNavbar = !this.checkRoute();
    });
  }

  checkRoute(): boolean {
    console.log("path is", this.router.url)
    return this.router?.url === '' || this.router?.url === '/home'|| this.router?.url === '/contact' ;
  }

}
