import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule ,provideAnimations } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioDetailCardComponent } from './portfolio-detail-card/portfolio-detail-card.component';
import { PortfolioSliderComponent } from './portfolio-slider/portfolio-slider.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { MainPosterComponent } from './main-poster/main-poster.component';
import { WeAreHomeComponent } from './we-are-home/we-are-home.component';
import { WhatWeDoCardComponent } from './what-we-do-card/what-we-do-card.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { NewBusinessHeightsComponent } from './new-business-heights/new-business-heights.component';
import { HeightsSliderComponent } from './heights-slider/heights-slider.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { WhyChooseCardComponent } from './why-choose-card/why-choose-card.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { WhatWeDoCard2Component } from './what-we-do-card-2/what-we-do-card-2.component';


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
    PortfolioCardComponent,
    PortfolioDetailsComponent,
    PortfolioDetailCardComponent,
    PortfolioSliderComponent,
    ContactFormComponent,
    ContactMapComponent,
    MainPosterComponent,
    WeAreHomeComponent,
    WhatWeDoCardComponent,
    WhatWeDoComponent,
    NewBusinessHeightsComponent,
    HeightsSliderComponent,
    WhyChooseComponent,
    WhyChooseCardComponent,
    MobileNavbarComponent,
    WhatWeDoCard2Component,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





