<template>
    <div>
        <p>{{ summary }}</p>
        
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
      summary: null
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
          url = "https://guarded-harbor-49578.herokuapp.com/wikiscraper/" + x.wiki;
        }
      });
      console.log(url)
      fetch(url)
        .then(function (resp) {
          return resp.text();
        }) 
        .then(function (obj) {
          console.log("test",obj)
          self.summary = obj

        });
    },
  },
};


</script>