import React from "react";
import MarkerManager from "../util/markerManager";
import { withRouter } from 'react-router-dom';

// const CENTER = {
//   lat: 40.7308627508047,
//   lng: -73.9967510536008
// }
 
class ListingMap extends React.Component {

  constructor(props) {
    super(props);
    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount() {
    this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.listing);

    this.renderMap();
  };

  renderMap() {
    let { lat, lng } = this.props.listing;

    const mapOptions = {
      center: {
        lat: lat,
        lng: lng,
      },
      zoom: 14,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      clickableIcons: false,
      zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_TOP},
      backgroundColor: "none",
      minZoom: 13,
      maxZoom: 18,
      gestureHandling: 'none',
      mapId: '2e84cab39be786ee',
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    
    this.marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      icon: {
        url: `${window.homeMarker}`,
        scaledSize: new google.maps.Size(60,60), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(30,30) // anchor
      },
      clickable: false,
      map: this.map,
    });

    this.circle = new google.maps.Circle({
      center: {
        lat: lat,
        lng: lng
      },
      radius: 600,
      fillColor: '#E31C5F',
      fillOpacity: 0.25,
      strokeColor: '#FF385C',
      strokeOpacity: 0.1,
      strokeWeight: 3,
      clickable: false,
      map: this.map,
    });

    this.circle.bindTo('center', this.marker, 'position');
  };
  
  render() {
    return (
      <div className="listing-map-container">
        <div className="map-header">Where you'll be</div>
        <div id="map-container" ref={map => this.mapNode = map} />
      </div>
    )
  }
}

export default ListingMap;