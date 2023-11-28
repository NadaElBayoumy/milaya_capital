import { Component, Input, HostListener, Renderer2 } from '@angular/core';
import { slideFromLeft, slideFromTop1, slideFromTop2, slideFromTop3, slideFromTop4, slideFromRight } from '../../animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [slideFromLeft, slideFromTop1, slideFromTop2, slideFromTop3, slideFromTop4, slideFromRight],
})
export class NavbarComponent {
  @Input() isHome!: boolean;
  @Input() isContact!: boolean;
  isSticky: boolean = false;
  lastScrollTop = 0;

  constructor(private renderer: Renderer2) {
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isSticky = window.scrollY > 100; 
    const currentScrollTop = window.scrollY;
    
    if (currentScrollTop < this.lastScrollTop) {
      document.body.classList.remove('scroll-dwn');
    } else {
      document.body.classList.add('scroll-dwn');
    }

    this.lastScrollTop = currentScrollTop;
  }


}
