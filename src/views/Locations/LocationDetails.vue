<template>
    <div class="location">
        <div style="width: 500px; margin: auto; padding: 20px;">
              <ImageWidget locName="Smith Rock" ></ImageWidget>
        </div>
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

        <div class ="table">
            <TableWidget :locName="name" style="margin:auto;"></TableWidget>
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
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import ImageWidget from '@/components/ImageWidget.vue'
import Summary from '@/components/Summary.vue'
import WeatherWidget from '@/components/WeatherWidget.vue'
import MapWidget from '@/components/MapWidget.vue'
import TableWidget from '@/components/TableWidget.vue'
import locationData from "@/locationData.json";

export default {
    components: {
        Summary,
        WeatherWidget,
        MapWidget,
        ImageWidget,
        TableWidget
    },
    data(){
        var wikiName = null;
        locationData.data.forEach(x => {
            
            if(x.name === this.$route.params.locname) {
                wikiName = x.wiki
            }
        });

        return{
            name: this.$route.params.locname,
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