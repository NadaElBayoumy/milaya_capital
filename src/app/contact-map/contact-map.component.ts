import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { 
  fadeInFromTop
} from '../animations';
@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss'],
  animations: [
    fadeInFromTop,
  ],
})
export class ContactMapComponent implements OnInit {
  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map').setView([0, 0], 2);
    // var map = L.map('map').setView([51.505, -0.09], 13);

    var latlng = L.latLng(50.5, 30.5);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    // Create a custom icon
    const customIcon = L.icon({
      iconUrl: 'assets/pinpoint.jpg',
      iconSize: [32, 32], // size of the icon
      iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
    });

    // Add a marker with the custom icon
    L.marker([0, 0], { icon: customIcon }).addTo(map)
      .bindPopup('This is a marker.')
      .openPopup();

  }


}
