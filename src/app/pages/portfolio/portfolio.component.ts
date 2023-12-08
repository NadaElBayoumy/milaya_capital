import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { fadeInFromTop1, fadeInFromTop2, fadeInFromTop3 } from '../../animations';
import { MilayaService } from 'src/app/milaya.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fadeInFromTop1, fadeInFromTop2, fadeInFromTop3]
})
export class PortfolioComponent implements OnInit {
  isMobile: boolean = false;
  isLoading: boolean = true;

  constructor(private milayaService: MilayaService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  portfolios: any[] = [];

  ngOnInit() {
    this.milayaService.getPortfolios().subscribe((portfolios) => {
      portfolios.forEach(portfolio => {
        let tit = this.milayaService.removeHtmlTagsPipe.transform(portfolio.title.rendered);
        let des = this.milayaService.removeHtmlTagsPipe.transform(portfolio.content.rendered);
        des = this.milayaService.truncateText(des, 40);
        let img:any;
        let background_img:any;
        this.milayaService.getFeaturedImageUrl(portfolio.featured_media).subscribe((media_ret: any) => {
          img = media_ret.source_url;
          this.milayaService.getFeaturedImageUrl(portfolio?.acf?.portfolio_background_image).subscribe((media_ret: any) => {
            background_img = media_ret.source_url;
            this.portfolios.push({ id: portfolio.id, title: tit, description: des, image: img, backgroundImage: background_img });
            this.isLoading = false;
          });
        });
      });
    });
  }
}
