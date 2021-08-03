<template>
  <div class="home">
    <h1 class="title">7 Wonders Of Oregon</h1>
    <div class="containers">
      <div>
        <p class="text">
          The 7 Wonders of Oregon is the seven beautiful natural wonders in
          Oregon. There are the Oregon Coast, Mt. Hood, the Columbia River
          Gorge, Crater Lake, the Painted Hills, the Wallowas and Smith Rock.
          Even though they are all in Oregon, each location has different
          landscaping and breathtaking view. While the ancient world held seven
          wonders to share, Oregon offers beuatiful natural wonders that you can
          easily reached in a single road trip.
        </p>
      </div>

      <ul class="flex-container">
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Columbia River Gorge">
              <img
                :src="locData.data[0].image"
                class="card-img-top"
                alt="Columbia River Gorge"
              />
              <div class="card-body">
                <p class="card-text">Columbia River Gorge</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Crater Lake">
              <img
                :src="locData.data[1].image"
                class="card-img-top"
                alt="Crater Lake"
              />
              <div class="card-body">
                <p class="card-text">Crater Lake</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Painted Hills">
              <img
                :src="locData.data[2].image"
                class="card-img-top"
                alt="Painted Hills"
              />
              <div class="card-body">
                <p class="card-text">Painted Hills</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Oregon Coast">
              <img
                :src="locData.data[3].image"
                class="card-img-top"
                alt="Oregon Coast"
              />
              <div class="card-body">
                <p class="card-text">Oregon Coast</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
      <ul class="flex-container">
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Smith Rock">
              <img
                :src="locData.data[4].image"
                class="card-img-top"
                alt="Smith Rock"
              />
              <div class="card-body">
                <p class="card-text">Smith Rock</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/The Wallowas">
              <img
                :src="locData.data[5].image"
                class="card-img-top"
                alt="The Wallowas"
              />
              <div class="card-body">
                <p class="card-text">The Wallowas</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Mt. Hood">
              <img
                :src="locData.data[6].image"
                class="card-img-top"
                alt="Mt. Hood"
              />
              <div class="card-body">
                <p class="card-text">Mt. Hood</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
      <div></div>
    </div>
    <!--containers-->
  </div>
</template>

<script>
// @ is an alias to /src
import locationData from "@/locationData.json";

export default {
  name: "Home",
  data() {
    return {
      name: this.$route.params.locname,
      locData: locationData
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var self = this;
      var wikiName = null;
      locationData.data.forEach((x) => {
        var url =
          "https://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/" + x.wiki;
          
        // fetch(url)
        //   .then(function (resp) {
        //     return resp.json();
        //   }) // Convert data to json
        //   .then(function (data) {
        //     console.log(data.image-url);
        //     x.image = data.image-url;
        //   });
        x.image = "//upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lostine_River_valley.jpg/220px-Lostine_River_valley.jpg"
      });
    },
  },
};
</script>

<style>
.title {
  padding: 0;
  margin: 50px;
}

.text {
  padding: 0;
  margin: 80px;
}
.flex-container {
  /* We first create a flex layout context */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
  margin: 10px;
  list-style: none;
}

.flex-item {
  margin: 10px;
}

.homelink {
  color: black;
  outline: none;
  text-decoration: none;
}
</style>
