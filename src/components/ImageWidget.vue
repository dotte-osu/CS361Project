<template>
  <div>
    <img :src="imageLink"  alt="Crater Lake" />
  </div>
</template>

<script>
import locationData from "@/locationData.json";

export default {
  props: {
    locName: {
      type: String,
      required: true,
      default: "none",
    },
  },
  data() {
    var imageLink = null
    
    locationData.data.forEach((x) => {
      if (x.wiki === this.locName) {
        var url = "https://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/" + x.wiki;
      }
      // fetch(url)
      //   .then(function (resp) {
      //     return resp.json();
      //   }) // Convert data to json
      //   .then(function (data) {
      //     console.log(data.image-url);
      //     x.image = data.image-url;
      //   });
      imageLink = "//upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lostine_River_valley.jpg/220px-Lostine_River_valley.jpg"
    });

    return {
      imageLink : imageLink
    }
    
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