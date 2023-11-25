import { Component, OnInit ,HostListener} from '@angular/core';
import * as L from 'leaflet';
import { enterFromTop } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss'],
  animations: [enterFromTop],
})
export class ContactMapComponent implements OnInit {
  isMobile: boolean = false;
  customIcon:any;
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  
  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map',{center:[25.14091142684441, 55.217559581197044]}).setView([25.14091142684441, 55.217559581197044], 15);
    // var latlng = L.latLng(25.14091142684441, 55.217559581197044);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 13
    }).addTo(map);

    
    if(!this.isMobile){
      this.customIcon = L.icon({
        iconUrl: '../../../assets/marker.svg',
        iconSize: [52, 52], // size of the icon
        iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
      });
    }else{
      this.customIcon = L.icon({
        iconUrl: '../../../assets/marker.svg',
        iconSize: [52, 52], // size of the icon
        iconAnchor: [5, 10], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
      });
    }
    
   

    // Add a marker with the custom icon
    L.marker([25.14091142684441, 55.217559581197044], { icon: this.customIcon }).addTo(map)
      .bindPopup('Milaya Capital');
      // .openPopup();
  }

  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
    enterFromTop1: 'hidden',
    enterFromTop2: 'hidden'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold values as needed
    const threshold = 50;

    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > threshold ? 'visible' : 'hidden';
  }
}
