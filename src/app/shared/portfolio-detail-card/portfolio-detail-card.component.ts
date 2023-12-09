import { Component, OnInit } from '@angular/core';
import { slideFromTop, fadeInFromRight, fadeInFromTop1, fadeInFromLeft } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { MilayaService } from 'src/app/milaya.service';

@Component({
  selector: 'app-portfolio-detail-card',
  templateUrl: './portfolio-detail-card.component.html',
  styleUrls: ['./portfolio-detail-card.component.scss'],
  animations: [slideFromTop, fadeInFromRight, fadeInFromTop1, fadeInFromLeft],
})
export class PortfolioDetailCardComponent implements OnInit {
  id: any;
  isMobile: boolean = false;
  title: any;
  content: any;
  img: any;
  email: any;
  location: any;
  website: any;
  isLoading: boolean = true;

  constructor(private sanitizer: DomSanitizer, private milayaService: MilayaService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  navigateToExternalLink(): void {
    window.location.href = this.website;
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
        this.milayaService.getPortfolioById(this.id).subscribe((post) => {
          this.email = post.acf?.email;
          this.location = post.acf?.location;
          this.website = post.acf?.website;
          if (post?.title?.rendered) {
            this.title = post.title?.rendered;
            this.content = this.milayaService.sanitizeHtml(post.content.rendered)
            this.route.queryParams.subscribe(params2 => {
              this.milayaService.getFeaturedImageUrl(post.featured_media).subscribe((media_ret: any) => {
                this.img = media_ret.source_url;
                this.isLoading = false;
              });
            });
          }
        });
      });
  }
}
