import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { fadeInFromTop } from '../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss'],
  animations: [fadeInFromTop],
})
export class ContactMapComponent implements OnInit {
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  
  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map').setView([0, 0], 2);
    var latlng = L.latLng(50.5, 30.5);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    const customIcon = L.icon({
      iconUrl: '../../assets/marker.svg',
      iconSize: [52, 52], // size of the icon
      iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
    });

    // Add a marker with the custom icon
    L.marker([0, 0], { icon: customIcon }).addTo(map)
      .bindPopup('This is a marker.');
      // .openPopup();

  }
}
