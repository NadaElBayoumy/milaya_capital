import { Component, OnInit, HostListener } from '@angular/core';
import { enterFromTop, enterFromTop1 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [enterFromTop, enterFromTop1]
})

export class ClientsComponent implements OnInit {
  slides1 = [
    { id: 1, name: "Ted Baker", src: "../../../assets/1-.svg" },
    { id: 2, name: "Black Penny", src: "../../../assets/2-.svg" },
    { id: 3, name: "Mileo Jets", src: "../../../assets/3-.svg" },
    { id: 4, name: "Mileo Hotels", src: "../../../assets/4-.svg" },
    { id: 5, name: "Oxotech", src: "../../../assets/5-.svg" },

    { id: 1, name: "Ted Baker", src: "../../../assets/1-.svg" },
    { id: 2, name: "Black Penny", src: "../../../assets/2-.svg" },
    { id: 3, name: "Mileo Jets", src: "../../../assets/3-.svg" },
    { id: 4, name: "Mileo Hotels", src: "../../../assets/4-.svg" },
    { id: 5, name: "Oxotech", src: "../../../assets/5-.svg" },

  ];

  slides2 = [
    { id: 2, name: "Black Penny", src: "../../../assets/2-.svg" },
    { id: 5, name: "Oxotech", src: "../../../assets/5-.svg" },
    { id: 6, name: "Dbone", src: "../../../assets/6-.svg" },
    { id: 7, name: "Skull head", src: "../../../assets/7-.svg" },
    { id: 8, name: "Milaya Energy", src: "../../../assets/8-.svg" },
    { id: 3, name: "Milaya Jets", src: "../../../assets/3-.svg" },

    { id: 2, name: "Black Penny", src: "../../../assets/2-.svg" },
    { id: 5, name: "Oxotech", src: "../../../assets/5-.svg" },
    { id: 6, name: "Dbone", src: "../../../assets/6-.svg" },
    { id: 7, name: "Skull head", src: "../../../assets/7-.svg" },
    { id: 8, name: "Milaya Energy", src: "../../../assets/8-.svg" },
    { id: 3, name: "Milaya Jets", src: "../../../assets/3-.svg" },

  ];

  slideConfig1 = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,
    pauseOnFocus: false,
    draggable: false,
    pauseOnHover: true
  };

  slideConfig2 = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    pauseOnFocus: false,
    draggable: false,
    pauseOnHover: true
  };

  isMobile: boolean = false;
  // Threshold values as needed
  threshold = 700;

  constructor(private milayaService: MilayaService,private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });

    if (this.router?.url == "/about") {
      this.threshold = 700;
    }
    else if (this.router?.url == "/home") {
      this.threshold = 2500;
    }
    else if (this.router?.url == "/mission") {
      this.threshold = 0;
    }
  }

  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.milayaService.getClients().subscribe((clients:any) => {
          // let client_rendered = clients.content.rendered;
          // this.sanitizedHTMLArray = this.data.map(item =>
          //   this.sanitizer.bypassSecurityTrustHtml(item.content.rendered)
          // );

          // let clients_san = this.milayaService.sanitizeHtml(client_rendered)
          // console.log(clients_san);
          // client_rendered.forEach(cl:any => {
            
          // });
          
          

          // portfolios.forEach(portfolio => {
          //   let tit = this.milayaService.removeHtmlTagsPipe.transform(portfolio.title.rendered);
          //   let des = this.milayaService.removeHtmlTagsPipe.transform(portfolio.content.rendered);
          //   des = this.milayaService.truncateText(des,40);
          //   // let img = this.removeHtmlTagsPipe.transform(portfolio.img)
          //   let img;

          //   this.route.queryParams.subscribe(params2 => {
          //     this.milayaService.getFeaturedImageUrl(portfolio.featured_media).subscribe((media_ret: any) => {
          //       console.log("media returned",media_ret);
          //       img = media_ret.source_url;
          //       this.portfolios.push({ id: portfolio.id, title: tit, description: des, image: img, backgroundImage: "assets/clients/tedbaker.svg" });
          //     });
          //   });
          //   console.log(tit, des)
           
          // });

        });
      }
      );
  }

  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
    enterFromTop1: 'hidden',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(window.scrollY)
    // if(this.router?.url == "/mission"){
    //   return;
    // }
    this.animationStates.enterFromTop = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop1 = window.scrollY > this.threshold ? 'visible' : 'hidden';
  }

  onMouseEnter(id: number, index: number, sliderNum: number): void {
    console.log(id, sliderNum)
    if (sliderNum == 1) {
      this.slides1[index].src = "../../../assets/" + id + "-" + id + ".svg";
    } else if (sliderNum == 2) {
      this.slides2[index].src = "../../../assets/" + id + "-" + id + ".svg";
    }
  }

  onMouseLeave(id: number, index: number, sliderNum: number): void {
    console.log(id, sliderNum)
    if (sliderNum == 1) {
      this.slides1[index].src = "../../../assets/" + id + "-.svg";
    } else if (sliderNum == 2) {
      this.slides2[index].src = "../../../assets/" + id + "-.svg";
    }
  }
}

