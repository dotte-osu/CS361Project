<template>
  <div>
    <img :src="imageLink"  alt="park image" />
  </div>
</template>

<script>
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
      imageLink: null
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
      var url =null
      self.name = this.locName


      locationData.data.forEach((x) => {
        if (x.name === self.name) {
          url = "https://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/" + x.wiki;
        }
      });
      console.log(url)
      fetch(url)
        .then(function (resp) {
          return resp.json();
        }) 
        .then(function (obj) {
          Object.keys(obj).forEach(function(k){
          self.imageLink = obj[k]
        });
        });
    },
  },
};


</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>