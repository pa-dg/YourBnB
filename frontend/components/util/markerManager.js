export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromListing(listing) {
    const { id, lat, lng } = listing;

    let pos = {
      lat: lat,
      lng: lng,
    };
  }

  updateMarkers(listing) {
    console.log("update map");
  }
}
