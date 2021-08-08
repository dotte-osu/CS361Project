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
                <ImageWidget locName="Columbia River Gorge" style="width: 18rem; height: 13rem;"></ImageWidget>
              <div class="card-body">
                <p class="card-text">Columbia River Gorge</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Crater Lake">
              <ImageWidget locName="Crater Lake" style="width: 18rem; height: 13rem;"></ImageWidget>
              <div class="card-body">
                <p class="card-text">Crater Lake</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Painted Hills">
              <ImageWidget locName="Painted Hills" style="width: 18rem; height: 13rem;"></ImageWidget>
              <div class="card-body">
                <p class="card-text">Painted Hills</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Oregon Coast">
              <ImageWidget locName="Oregon Coast" style="width: 18rem; height: 13rem;"></ImageWidget>
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
              <ImageWidget locName="Smith Rock" style="width: 18rem; height: 13rem;" ></ImageWidget>
              <div class="card-body">
                <p class="card-text">Smith Rock</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/The Wallowas">
              <ImageWidget locName="The Wallowas" style="width: 18rem; height: 13rem;"></ImageWidget>
              <div class="card-body">
                <p class="card-text">The Wallowas</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="flex-item">
          <div class="card" style="width: 18rem">
            <router-link class="homelink" to="/location/Mt. Hood">
              <ImageWidget locName="Mt. Hood" style="width: 18rem; height: 13rem;"></ImageWidget>
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
import ImageWidget from '@/components/ImageWidget.vue'

export default {
  name: "Home",
  components: {
    ImageWidget
  },
  data() {
    return {
      locData: locationData
    };
  }
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
