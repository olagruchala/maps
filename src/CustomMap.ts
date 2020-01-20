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

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(item: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng
      }
    });

    marker.addListener('click', this.showInfoWindow);
  }

  showInfoWindow(e) {
    const infoWindow = new google.maps.InfoWindow({
      content: ' '
    });

    console.log(`${e.target}`);
  }
}
