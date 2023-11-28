import { Component ,HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { fadeInFromTop1, fadeInFromTop2, fadeInFromTop3 } from '../../animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fadeInFromTop1, fadeInFromTop2, fadeInFromTop3]
})
export class PortfolioComponent {

  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  portfolios = [
    { id: 1, title: "MILAYA ENERGY", description:"Milaya Energy is a leading Energy provider in the Oil & Gas industry from upstream to downstream, we deliver results you can rely on to enhance productivity, optimize operations, and minimize risk through our advanced services in the industry.", image: "assets/offshore_platform.png" },
    { id: 2, title: "MILEO LUXURY HOTEL", description:"Mileo is situated in the heart of famous Kalo Livadi Beach and at a distance of 10 km from the vibrant Town Centre Mykonos.It is set over the Kalo Livadi beach, with unobstructed views towards the Aegean Sea. Famed for its picturesque Cycladic architecture and its cosmopolitan life, Mykonos and especially Kalo Livadi beach will be your favorite summer destination.", image: "assets/mileo-luxury-scaled.jpg" },
    { id: 3, title: "DBONE RESTAURANT", description:"Our aim at DB.one is to create the ultimate meat experience. We use superior quality Australian Wagyu and US Prime meat sourced from exclusive farms that seek to promote sustainability. The combination of full flavour, marbling and melt in the mouth texture provides an unmatched taste sensation and our meats are at the heart of the plates crafted by our chefs.", image: "assets/Dbone-Meat-scaled.jpg" },
    { id: 4, title: "SKULL HEAD REAL ESTATE", description:"SKULL HEAD REAL ESTATE", image: "assets/skull-head-scaled.jpg" },
    { id: 5, title: "THE BLACK PENNY", description:"The word “coffee” entered the English language in 1582 via the Dutch ‘koffie,’ borrowed from the Turkish ‘kahve.’ Europe started its great love affair with coffee when Ozdemir of Pasha set sail across the Black Sea with a hold full of coffee seeds. Before long, the love for coffee had spread from the Sultans and their Queens to every corner of Turkish society and beyond.", image: "assets/The-Black-penny-scaled.jpg" },
    { id: 6, title: "TED's GROOMING LONDON", description:"TED's GROOMING LONDON", image: "assets/tedbacker-bg.jpg" },
  ];

}
