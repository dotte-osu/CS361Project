<template>
  <div>
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
  data() {
    return {
      name: this.$route.params.locname,
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

      locationData.data.forEach((x) => {
        if (x.name === this.$route.params.locname) {
          cityName = x.weatherLoc;
        }
      });

      var url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "," +
        stateName +
        ",us&appid=" +
        Keys.data[0].APY_KEY;
      console.log(url);
      fetch(url)
        .then(function (resp) {
          return resp.json();
        }) // Convert data to json
        .then(function (data) {
          // today's date
          var today = new Date();
          var yy = today.getFullYear();
          var dd = today.getDate();
          var mm = today.getMonth() + 1;
          var hh = today.getHours();
          var min = today.getMinutes();
          if (min < 10) {
            min = "0" + min;
          }
          var day = today.getDay();
          var dayname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          var monthname = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          var date =
            dayname[day] +
            " " +
            monthname[mm - 1] +
            " " +
            dd +
            " " +
            yy +
            " " +
            hh +
            ":" +
            min;

          //get date from API
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