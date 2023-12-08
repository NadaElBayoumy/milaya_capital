import { Component, Input, OnInit } from '@angular/core';
import { slideFromTop, slideFromTop2 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [slideFromTop, slideFromTop2],
})

export class OverviewComponent implements OnInit {
  @Input() pageTitle!: string;
  @Input() direction!: string;
  @Input() light!: string;
  isMobile: boolean = false;
  pageOverviewText:any;

  constructor(private milayaService: MilayaService, private router: Router, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
    this.milayaService.getOverview().subscribe((page_overview:any) => {
      let overviewText;
      if (this.router?.url == "/about") {
        overviewText = this.milayaService.getObjectById(page_overview, this.milayaService.page_overview.about);
      }
      else if (this.router?.url == "/mission") {
        overviewText = this.milayaService.getObjectById(page_overview, this.milayaService.page_overview.mission);
      }
      else if (this.router?.url == "/portfolio") {
        overviewText = this.milayaService.getObjectById(page_overview, this.milayaService.page_overview.portfolio);
      }
      else if (this.router?.url.split("?")[0] == "/portfolio-details") {
        overviewText = this.milayaService.getObjectById(page_overview, this.milayaService.page_overview.portfolio_details);
      }
      else if (this.router?.url == "/contact") {
        overviewText = this.milayaService.getObjectById(page_overview, this.milayaService.page_overview.contact);
      }
      this.pageOverviewText = this.milayaService.removeHtmlTagsPipe.transform(overviewText?.content?.rendered);
    });
  }
}
