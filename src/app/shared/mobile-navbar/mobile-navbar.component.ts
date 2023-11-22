import { Component, Input } from '@angular/core';
import { MilayaService } from 'src/app/milaya.service';
import{slideInFromRight} from '../../animations';
@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
  animations:[slideInFromRight]
})

export class MobileNavbarComponent {
  @Input() isHome!: boolean;
  @Input() isContact!: boolean;
  sideMenuOpen:any;

  constructor(public milaya: MilayaService) {
    milaya.sideMenuOpen = false;
  }


  toggleMobileMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
    this.milaya.sideMenuOpen = this.sideMenuOpen;
  }
}
