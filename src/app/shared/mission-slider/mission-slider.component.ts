import { Component,  ElementRef, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fadeInFromTop2 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { MilayaService } from 'src/app/milaya.service';
import { RemoveHtmlTagsPipe } from '../../../remove-html-tags.pipe';

@Component({
  selector: 'app-mission-slider',
  templateUrl: './mission-slider.component.html',
  styleUrls: ['./mission-slider.component.scss'],
  animations: [fadeInFromTop2]
})
export class MissionSliderComponent implements  OnInit {
  title = 'mission slider';
  isMobile: boolean = false;
  isLoading: boolean = true;
  missions: any[] = [];

  constructor(private removeHtmlTagsPipe: RemoveHtmlTagsPipe, private sanitizer: DomSanitizer, private milayaService: MilayaService, private el: ElementRef, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  customOptions: OwlOptions = {
    skip_validateItems:true,
    items: 4,
    loop: true,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 4
      }
    }
  }

  slides = [];

  ngOnInit() {
    this.milayaService.getMissions().subscribe((missions) => {
      missions.forEach(mission => {
        let tit = this.removeHtmlTagsPipe.transform(mission.title.rendered);
        let des = this.removeHtmlTagsPipe.transform(mission.content.rendered);
        des = this.milayaService.truncateText(des, 40);
        let img;
        this.route.queryParams.subscribe(params2 => {
          this.milayaService.getFeaturedImageUrl(mission.featured_media).subscribe((media_ret: any) => {
            img = media_ret.source_url;
            this.missions.push({ id: mission.id, icon: "bi bi-buildings", title: tit, descr: des, img: img });
            this.isLoading = false;
          });
        });
      });
    });
  }

  getAnimationClass(index: number): string {
    return "animation-slideIn-" + index;
  }

}
