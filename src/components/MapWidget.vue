<template>
  <div class="map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { Icon } from "leaflet";
import locationData from "@/locationData.json";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "MyAwesomeMap",
  props: {
    locName: {
      type: String,
      required: true,
      default: "none",
    },
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {

    var lat = null
    var long = null

    locationData.data.forEach((x) => {
      if (x.name === this.locName) {
        lat = x.Latitude
        long = x.Longitude
      }
    });

    return {
      zoom: 10,
      center: L.latLng(lat, long),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(lat, long),
    };
  },
};
</script>

<style scoped>
.map {
  height: 80%;
}
</style>