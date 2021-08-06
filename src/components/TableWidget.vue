<template>
  <div >
    <b-table class="center" striped hover :items="data" ></b-table>
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
      data: []
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
          console.log(x.wiki.replaceAll("_", "+"))
          url = "https://state-comparison.herokuapp.com/search?search=" + x.wiki.replaceAll("_", "+")
        }
      });
      
        fetch(url)
        .then(function (resp) {
          return resp.json();
        }) 
        .then(function (obj) {
          
          
          Object.keys(obj).forEach(function(k){
            var d = {
                      type : k,
                      data : obj[k]
                  };
            
          
          if(!d.type.includes("Coordinates") && !d.type.includes("Website")){
            self.data.push(d)
          }
            
          });
          
        });
    },
  },
};
</script>

<style scoped>
.center{
  width: 50%;
  margin: auto;
}
</style>