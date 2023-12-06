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
    leaders_in_management : 44,
    we_are_dynamic :45,
    our_vision:46
  }

  main_video_id = 37;
  counter_id = 47


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
    return this.http.get<any[]>(`${this.apiBaseUrl}posts?categories=3&orderby=id&order=asc`);
  }


  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}posts?categories=3&orderby=id&order=asc`);
    // this.http.get<any[]>(`${this.apiBaseUrl}pages/52?_embed`).subscribe((clients:any) => {
    //   let client_rendered = clients.content.rendered;
    //   // this.sanitizedHTMLArray = client_rendered.map((item: { content: { rendered: string; }; }) =>
    //   //   this.sanitizer.bypassSecurityTrustHtml(item.content.rendered)
    //   // );
    //   // console.log(this.sanitizedHTMLArray)
    //   // let clients_san = this.sanitizeHtml(client_rendered)
    //   // console.log(clients_san);
    // }


    // this.http.get<any[]>(`${this.apiBaseUrl}pages`).subscribe(data => {
    //   // let nnnn = data;

    //   // console.log(nnnn.content.rendered)
    //   // Sanitize HTML and convert to an array of SafeHtml
    //   this.sanitizedHTMLArray = data.map(data =>
    //     this.sanitizer.bypassSecurityTrustHtml(data.content.rendered)

    //   );
    //   console.log("sanitez", this.sanitizedHTMLArray);
    // });


    // this.http.get<any[]>(`${this.apiBaseUrl}media`).subscribe(data => {
    //   let returned_object: any = data;
    //   console.log(returned_object)

    //   this.sanitizedHTMLArray = data.map(post =>
    //     this.sanitizer.bypassSecurityTrustHtml(returned_object));

    //   console.log(this.sanitizedHTMLArray);


    // const segments = returned_object.content.rendered.split('<figure>');
    // console.log(segments)

    // let searchString = "http://localhost/milayacapital/wp-content/uploads/2023/11";
    // // const regex = new RegExp(`${searchString}*[^.png]+`, 'g');
    // // const regex = new RegExp(`/^http*.*.*png*/`, 'g');
    // const regex = /^figure.*png$/;


    // const matches = returned_object.content.rendered.match(regex);

    // console.log("matches",matches)
    // let result_array:any;
    // if (matches) {
    //   result_array = matches.map((match: string) => match.substring(searchString.length));
    // }



    // let jsonArray = segments.map((segment: string) => {
    //   try {
    //     return JSON.parse(segment);
    //   } catch (error) {
    //     console.error('Error parsing JSON:', error);
    //     return null;
    //   }
    // });

    // Filter out null values (failed parsing)
    // this.jsonArray = this.jsonArray.filter(obj => obj !== null);



    // Check if posts is an array before using map
    // if (Array.isArray(data)) {
    //   // Sanitize HTML and convert to an array of SafeHtml
    //   this.sanitizedHTMLArray = data.map(post =>
    //     this.sanitizer.bypassSecurityTrustHtml(post.content.rendered)
    //   );
    // } else {
    //   console.error('Unexpected response format from WordPress API.');
    // }

    // console.log(this.sanitizedHTMLArray)
    // });







    // return this.http.get<any[]>(`${this.apiBaseUrl}pages/52?_embed`);
  }

  getPortfolioById(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}posts/${postId}`);
  }

  getFeaturedImageUrl(mediaId: number): Observable<string> {
    // return this.http.get<any>(`${this.apiBaseUrl}/media/${mediaId}`).pipe(
    //   map(response => response.source_url)  );
    return this.http.get<any>(`${this.apiBaseUrl}media/${mediaId}`);
  }


  getHomePageWhatWeDo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}what_we_do?orderby=id&order=asc`);
  }

  getMissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}posts?categories=5&orderby=id&order=asc`);
  }

  getMissionById(missionId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}posts/${missionId}`);
  }


  // New method to sanitize HTML content
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  truncateText(text: string, wordCount: number): string {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, wordCount);
    const truncatedText = truncatedWords.join(' ');

    return truncatedWords.length < words.length ? `${truncatedText}...` : truncatedText;
  }


  // Function to get object by id
  getObjectById(array:any , id: number) {
    return array.find((obj:any) => obj.id === id);
  }

}
