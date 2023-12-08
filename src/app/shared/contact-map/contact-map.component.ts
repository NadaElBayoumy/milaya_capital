import { Component, OnInit ,HostListener} from '@angular/core';
import * as L from 'leaflet';
import { enterFromTop } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';
@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss'],
  animations: [enterFromTop],
})
export class ContactMapComponent implements OnInit {
  isMobile: boolean = false;
  customIcon:any;
  lat:any;
  lng:any;
  zoom:any;
  isLoading: boolean = true;

  constructor(private milayaService: MilayaService,private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  
  ngOnInit(): void {
    this.milayaService.getContactInfo().subscribe((contact_info) => {
      this.lat = contact_info?.acf?.lat;
      this.lng = contact_info?.acf?.lng;
      this.zoom = contact_info?.acf?.zoom;
      
      this.initMap();
      this.isLoading = false;
    });
  }

  private initMap(): void {
    const map = L.map('map',{center:[this.lat, this.lng]}).setView([this.lat, this.lng], this.zoom);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: this.zoom
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
    L.marker([this.lat, this.lng], { icon: this.customIcon }).addTo(map)
      .bindPopup('Milaya Capital');
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
