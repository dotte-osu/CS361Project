<template>
    <div class="location">
        <div ><img :src="imageLink" :alt="name" width="500" height="400"></div>
        <h1 class ="title">{{ name }}</h1>
        <div class ="summary">
            <Summary :locName="name"></Summary>
        </div>
        
        <div class="locContainer">
            <div class="left secondBox">
                <WeatherWidget :locName="name"></WeatherWidget>
            </div>
            <div class="left secondBox">
                <MapWidget :locName="name"></MapWidget>
            </div>
        </div>

        <b-dropdown id="dropdown-1" text="Check another location!" class="m-md-2" variant="success" size="lg">
            <b-dropdown-item @click="reloadPage('Columbia River Gorge')">Columbia River Gorge</b-dropdown-item>
            <b-dropdown-item @click="reloadPage('Crater Lake')">Crater Lake</b-dropdown-item>
            <b-dropdown-item @click="reloadPage('Painted Hills')">Painted Hills</b-dropdown-item>
            <b-dropdown-item @click="reloadPage('Oregon Coast')">Oregon Coast</b-dropdown-item>
            <b-dropdown-item @click="reloadPage('Smith Rock')">Smith Rock</b-dropdown-item>
            <b-dropdown-item @click="reloadPage('The Wallowas')">The Wallowas</b-dropdown-item>
            <b-dropdown-item @click="reloadPage('Mt. Hood')">Mt. Hood</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
        </b-dropdown>


        <b-button variant="success" size="lg"><router-link class="link" to="/compare">Compare with another location!</router-link></b-button>
    </div>
</template>

<script>
import Summary from '@/components/Summary.vue'
import WeatherWidget from '@/components/WeatherWidget.vue'
import MapWidget from '@/components/MapWidget.vue'
import locationData from "@/locationData.json";

export default {
    components: {
        Summary,
        WeatherWidget,
        MapWidget
    },
    data(){
        var imageLink = null;
        var wikiName = null;
        locationData.data.forEach(x => {
            
            if(x.name === this.$route.params.locname) {
                imageLink = x.image
                wikiName = x.wiki
            }
        });

        if(imageLink == null){
            var url =
          "https://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/" + wikiName;
          
            // fetch(url)
            //   .then(function (resp) {
            //     return resp.json();
            //   }) // Convert data to json
            //   .then(function (data) {
            //     console.log(data.image-url);
            //     x.image = data.image-url;
            //   });
            imageLink = "//upload.wikimedia.org/wikipedia/commons/thumb/8/80/PaintedHillsPano4.jpg/1000px-PaintedHillsPano4.jpg"
        }
        return{
            name: this.$route.params.locname,
            imageLink: imageLink
        }
    },
    methods: {
        reloadPage(locName) {
            if(locName != this.name){
                this.$router.push(locName) 
                window.location.reload();
            }
            
        }
    }
}
</script>

<style>
.summary{
    width: 80%;
    margin: auto;
    padding: 10px;
}
.locContainer{
    display: flex;
    margin: auto;
    padding: 10px;
    height: 400px;
}

.secondBox{
    width: 45%;
    margin: auto;
    padding: 10px;
    height: 100%;
}
.link{
    color: white;
    outline: none;
    text-decoration: none;
}
</style>