import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MilayaService {
  private apiBaseUrl = 'http://localhost/milayacapital/wp-json/wp/v2/';

  sideMenuOpen: boolean;
  isMobile: boolean;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.sideMenuOpen = false;
    this.isMobile = false;

    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;

    });
  }

  checkRoute(): boolean {
    return this.router?.url === '' || this.router?.url === '/home' || this.router?.url === '/contact';
  }

  getPortfolios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}posts`);
  }

  getPortfolioById(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}posts/${postId}`);
  }
}
