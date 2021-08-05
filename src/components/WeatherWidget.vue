<template>
  <div class="weather">
    <h4>Current Conditions</h4>
    <div>
        <img :src="imgLink" width="100" height="100"/>
        <h4>{{ weather }}</h4>
        <br>
        <h5>temp: {{ temp }}</h5>
        <h5>humidity: {{ humidity }} %</h5>
        <h5>wind: {{ wind }} miles/hour</h5>
    </div>
  </div>
</template>
<script>
import Keys from "@/../data.json";
import locationData from "@/locationData.json";

export default {
  devServer: {
    proxy: "http://localhost:8080",
    host: "localhost",
  },
  props: {
    locName: {
      type: String,
      required: true,
      default: "none"
    },
  },
  data() {
    return {
      name: null,
      imgLink: null,
      humidity: null,
      temp: null,
      wind: null,
      weather: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      var self = this;
      var cityName = null;
      var stateName = "OR";
      self.name = this.locName

      locationData.data.forEach((x) => {
        if (x.name === self.name) {
          cityName = x.weatherLoc;
        }
      });

      var url =
        "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + stateName + ",us&appid=" + Keys.data[0].APY_KEY;
        fetch(url)
        .then(function (resp) {
          return resp.json();
        }) 
        .then(function (data) {
          //store weather data from API to variables
          self.weather = data.weather[0].description;
          self.humidity = data.main.humidity;
          self.temp =
            Math.round(((data.main.temp - 273.15) * 9) / 5 + 32) + " F";
          self.wind = Math.round(data.wind.speed * 2.23694) / 10;
          //set icon
          var icon = data.weather[0].icon;
          self.imgLink = "http://openweathermap.org/img/w/" + icon + ".png";
        });
    },
  },
};
</script>

<style scoped>
.weather{
  padding: 10px;
}
</style>