import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { fromLonLat, transform } from 'ol/proj'
import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import {Fill, RegularShape, Stroke, Style} from 'ol/style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  map: Map
  vectorLayer
  buildings = [
    {
      name: 'LIB',
      coords: [-82.412220, 28.059588]
    }, 
    {
      name: 'BSN',
      coords: [-82.409976, 28.058358]
    }, 
    {
      name: 'CPR',
      coords: [-82.410845, 28.059827]
    },
    {
      name: 'HMS',
      coords: [-82.409271, 28.060856]
    }
  ]

  stroke = new Stroke({color: 'black', width: 2});
  fill = new Fill({color: 'red'});

  styles = {
    'square': new Style({
      image: new RegularShape({
        fill: this.fill,
        stroke: this.stroke,
        points: 4,
        radius: 10,
        angle: Math.PI / 4,
      }),
    })
  }

  styleKeys = [
    'square',
  ];

  features = new Array(this.buildings.length);
  e = 4500000;


  ngOnInit(): void {
    this.initMap()
  }

  ngAfterViewInit() {
    for(var i = 0; i < this.buildings.length; i++) {
      this.features[i] = new Feature(new Point(fromLonLat(this.buildings[i].coords)));
      this.features[i].setStyle(
        this.styles[this.styleKeys[Math.floor(Math.random() * this.styleKeys.length)]]
      );
    }

    const source = new VectorSource({
      features: this.features,
    });
    
    this.vectorLayer = new VectorLayer({
      source: source,
    });

    this.map.addLayer(this.vectorLayer)

    this.map.on('click', e => {
      this.map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
          this.polyCoords = [
            feature.
            // Store coords of where the click was to do polyline
          ]
      })
    })
  }


  initMap() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      target: 'map',
      view: new View({
        center: fromLonLat([-82.414863, 28.061899]),
        zoom: 16
      }),
    });
  }
}
