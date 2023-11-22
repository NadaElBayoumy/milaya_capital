import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule ,provideAnimations } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MissionComponent } from './pages/mission/mission.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OverviewComponent } from './shared/overview/overview.component';
import { WeAreCardComponent } from './shared/we-are-card/we-are-card.component';
import { WeAreImgTextCardComponent } from './shared/we-are-img-text-card/we-are-img-text-card.component';
import { CounterCardComponent } from './shared/counter-card/counter-card.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { MediaComponent } from './shared/media/media.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MissionCardComponent } from './shared/mission-card/mission-card.component';
import { MissionSliderComponent } from './shared/mission-slider/mission-slider.component';
import { PortfolioCardComponent } from './shared/portfolio-card/portfolio-card.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';
import { PortfolioDetailCardComponent } from './shared/portfolio-detail-card/portfolio-detail-card.component';
import { PortfolioSliderComponent } from './shared/portfolio-slider/portfolio-slider.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { ContactMapComponent } from './shared/contact-map/contact-map.component';
import { MainPosterComponent } from './shared/main-poster/main-poster.component';
import { WeAreHomeComponent } from './shared/we-are-home/we-are-home.component';
import { WhatWeDoCardComponent } from './shared/what-we-do-card/what-we-do-card.component';
import { WhatWeDoComponent } from './shared/what-we-do/what-we-do.component';
import { NewBusinessHeightsComponent } from './shared/new-business-heights/new-business-heights.component';
import { HeightsSliderComponent } from './shared/heights-slider/heights-slider.component';
import { WhyChooseComponent } from './shared/why-choose/why-choose.component';
import { WhyChooseCardComponent } from './shared/why-choose-card/why-choose-card.component';
import { MobileNavbarComponent } from './shared/mobile-navbar/mobile-navbar.component';
import { WhatWeDoCard2Component } from './shared/what-we-do-card-2/what-we-do-card-2.component';
import { MilayaService } from './milaya.service';
import { PortfolioPageSliderComponent } from './shared/portfolio-page-slider/portfolio-page-slider.component';


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
    PortfolioPageSliderComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    MilayaService,
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





