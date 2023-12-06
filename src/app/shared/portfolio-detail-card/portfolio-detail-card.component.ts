import { Component, OnInit } from '@angular/core';
import { slideFromTop, fadeInFromRight, fadeInFromTop1, fadeInFromLeft } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer ,SafeHtml } from '@angular/platform-browser'
import { MilayaService } from 'src/app/milaya.service';

@Component({
  selector: 'app-portfolio-detail-card',
  templateUrl: './portfolio-detail-card.component.html',
  styleUrls: ['./portfolio-detail-card.component.scss'],
  animations: [slideFromTop, fadeInFromRight, fadeInFromTop1, fadeInFromLeft],
})
export class PortfolioDetailCardComponent implements OnInit {
  post: any;
  id: any;
  isMobile: boolean = false;
  title: any;
  content: any ;
  img: any;

  constructor(private sanitizer: DomSanitizer, private milayaService: MilayaService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
    
  }


  navigateToExternalLink(): void {
    window.location.href = 'http://milayaenergy.com/';
  }

  
  // New method to sanitize HTML content
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
        this.milayaService.getPortfolioById(this.id).subscribe((post) => {
          this.post = post;
          if (this.post?.title?.rendered) {
            this.title = this.post.title.rendered;
            this.content =  this.sanitizeHtml(this.post.content.rendered)
            this.route.queryParams.subscribe(params2 => {
              this.milayaService.getFeaturedImageUrl(this.post.featured_media).subscribe((media_ret: any) => {
                this.img = media_ret.source_url;
              });
            });
          }
        });
      }
      );
  }
}
