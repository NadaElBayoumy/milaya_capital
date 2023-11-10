import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// import { SwiperModule, SwiperComponent } from 'swiper/angular';
// import { SwiperModule } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { WeAreCardComponent } from './we-are-card/we-are-card.component';
import { WeAreImgTextCardComponent } from './we-are-img-text-card/we-are-img-text-card.component';
import { CounterCardComponent } from './counter-card/counter-card.component';
import { ClientsComponent } from './clients/clients.component';
import { MediaComponent } from './media/media.component';
import { FooterComponent } from './footer/footer.component';
import { MissionCardComponent } from './mission-card/mission-card.component';
import { MissionSliderComponent } from './mission-slider/mission-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MissionComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent,
    OverviewComponent,
    WeAreCardComponent,
    WeAreImgTextCardComponent,
    CounterCardComponent,
    ClientsComponent,
    MediaComponent,
    FooterComponent,
    MissionCardComponent,
    MissionSliderComponent,
    // SwiperDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxGalleryModule
    HttpClientModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
