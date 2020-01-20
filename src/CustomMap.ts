// wzór, jakie własciwości musi posiadac obiekt/klassa,
// który chce być parametrem dla addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  // private infoWindow: google.maps.InfoWindow;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  showInfoWindow() {
    const infoWindow = new google.maps.InfoWindow().open();
  }

  addMarker(item: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng
      }
    });
  }
}
