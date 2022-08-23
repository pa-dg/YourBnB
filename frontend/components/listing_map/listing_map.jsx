import React, { useState, useEffect } from "react";
import { BsGoogle } from "react-icons/bs";
import { withRouter } from 'react-router-dom';

const CENTER = {
  lat: 40.7308627508047,
  lng: -73.9967510536008
}
 
const mapOptions = {
      center: CENTER,
      zoom: 10,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      keyboardShortcuts: false,
      backgroundColor: "none",
      minZoom: 13,
      maxZoom: 14,
      gestureHandling: 'greedy',
}
class ListingMap extends React.Component {

  constructor(props) {
    super(props)

    this.map;
    this.markers= {};
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions)
  };

  render() {
    return (
        <div id="map-container" ref={map => this.mapNode = map} />
    )
  }
}

export default ListingMap;