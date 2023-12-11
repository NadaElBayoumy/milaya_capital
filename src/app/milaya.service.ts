import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { RemoveHtmlTagsPipe } from '../remove-html-tags.pipe';

@Injectable({
  providedIn: 'root'
})
export class MilayaService {
  private apiBaseUrl = 'http://localhost/milayacapital/wp-json/wp/v2/';
  private apiMailUrl = 'http://localhost/milayacapital/wp-json/milaya-email/v1/send-email/';
  // private apiBaseUrl = 'https://www.milayacapital.ae/test/wp-json/wp/v2/';
  // private apiMailUrl = 'https://www.milayacapital.ae/test/wp-json/milaya-email/v1/send-email/';
  sanitizedHTMLArray: SafeHtml[] = [];
  sideMenuOpen: boolean;
  isMobile: boolean;

  home_page_sections = {
    why_choose: 17,
    new_business_heights: 16,
    what_we_do: 12,
    our_work: 11,
    welcome: 8
  }


  page_overview = {
    contact: 43,
    portfolio_details: 40,
    portfolio: 41,
    mission: 39,
    about: 38
  }

  about_page_sections = {
    leaders_in_management: 44,
    we_are_dynamic: 45,
    our_vision: 46
  }

  counter_id = 47
  contact_id = 126;

  constructor(public removeHtmlTagsPipe: RemoveHtmlTagsPipe, private sanitizer: DomSanitizer, private http: HttpClient, private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.sideMenuOpen = false;
    this.isMobile = false;

    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  checkRoute(): boolean {
    return this.router?.url === '' || this.router?.url === '/home' || this.router?.url === '/contact';
  }


  getHomePageGenericSections(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}page_section?per_page=100`);
  }


  getAboutPageSections(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}about_page_sections?per_page=100`);
  }


  getCounters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}counters/47`);
  }


  getHomeBusinessHeightsSlider(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}business_heights?per_page=100`);
  }


  getHomeWhyChooseItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}why_choose?per_page=100`);
  }



  getOverview(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}page_overview?per_page=100`);
  }

  getPortfolios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}portfolios?per_page=100&orderby=id&order=asc`);
  }


  getClients(page:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}clients?per_page=8&page=${page}`);
  }

  
  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}clients?per_page=100`);
  }

  getPortfolioById(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}portfolios/${postId}`);
  }

  getFeaturedImageUrl(mediaId: number): Observable<string> {
    return this.http.get<any>(`${this.apiBaseUrl}media/${mediaId}`);
  }


  getHomePageWhatWeDo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}what_we_do?orderby=id&order=asc`);
  }

  getMissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}missions?per_page=100&orderby=id&order=asc`);
  }

  getMissionById(missionId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}posts/${missionId}`);
  }

  getContactInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}company_info/${this.contact_id}`);
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  truncateText(text: string, wordCount: number): string {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, wordCount);
    const truncatedText = truncatedWords.join(' ');
    return truncatedWords.length < words.length ? `${truncatedText}...` : truncatedText;
  }

  getObjectById(array: any, id: number) {
    return array.find((obj: any) => obj.id === id);
  }

  sendEmail(emailData: any) {
    return this.http.post(this.apiMailUrl, emailData);
  }

}
