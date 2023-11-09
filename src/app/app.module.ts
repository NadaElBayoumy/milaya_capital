import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxGalleryModule
    HttpClientModule, 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
