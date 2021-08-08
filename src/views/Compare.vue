<template>
    <div class="location">
        <h3 class="title">Let's compare locations</h3>
        <div>
            <b-button v-if="selected_1 == true && selected_2 == true" @click="clear()" variant="success" size="lg" style="mergin:auto">Clear Locations</b-button>
        </div>
        <div class="locContainer">
            <div class="left secondBox">
                <div>
                    <b-dropdown v-if="selected_1 == false" id="dropdown-1" text="Choose location to compare" class="m-md-2" variant="success" size="lg">
                        <b-dropdown-item @click="onClick1('Columbia River Gorge')">Columbia River Gorge</b-dropdown-item>
                        <b-dropdown-item @click="onClick1('Crater Lake')">Crater Lake</b-dropdown-item>
                        <b-dropdown-item @click="onClick1('Painted Hills')">Painted Hills</b-dropdown-item>
                        <b-dropdown-item @click="onClick1('Oregon Coast')">Oregon Coast</b-dropdown-item>
                        <b-dropdown-item @click="onClick1('Smith Rock')">Smith Rock</b-dropdown-item>
                        <b-dropdown-item @click="onClick1('The Wallowas')">The Wallowas</b-dropdown-item>
                        <b-dropdown-item @click="onClick1('Mt. Hood')">Mt. Hood</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                    </b-dropdown>
                </div>
                <div v-if="name_1 !== null" style="width: 500px; margin: auto; padding: 20px;">
                    <ImageWidget v-if="name_1 !== null" :locName="name_1"  style="width: 30rem; height: 13rem;"></ImageWidget>
                </div>
                    <h1 class ="name">{{ name_1 }}</h1>
                    <Summary class ="summary" v-if="name_1 !== null" :locName="name_1"></Summary>
                    <WeatherWidget  v-if="name_1 !== null" :locName="name_1"></WeatherWidget>
                    <MapWidget v-if="name_1 !== null" :locName="name_1"></MapWidget>
                <h3 class="title" v-if="name_1 === null">Please select a location to compare</h3>
                <br>
                <br>
                <br>
            </div>
            <div class="right secondBox">
                <div>
                    <b-dropdown v-if="selected_2 == false" id="dropdown-1" text="Choose location to compare" class="m-md-2" variant="success" size="lg">
                        <b-dropdown-item @click="onClick2('Columbia River Gorge')">Columbia River Gorge</b-dropdown-item>
                        <b-dropdown-item @click="onClick2('Crater Lake')">Crater Lake</b-dropdown-item>
                        <b-dropdown-item @click="onClick2('Painted Hills')">Painted Hills</b-dropdown-item>
                        <b-dropdown-item @click="onClick2('Oregon Coast')">Oregon Coast</b-dropdown-item>
                        <b-dropdown-item @click="onClick2('Smith Rock')">Smith Rock</b-dropdown-item>
                        <b-dropdown-item @click="onClick2('The Wallowas')">The Wallowas</b-dropdown-item>
                        <b-dropdown-item @click="onClick2('Mt. Hood')">Mt. Hood</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                    </b-dropdown>
                </div>
                <div v-if="name_2 !== null" style="width: 500px; margin: auto; padding: 20px;">
                    <ImageWidget v-if="name_2 !== null" :locName="name_2"  style="width: 30rem; height: 13rem;"></ImageWidget>
                </div>
                <h1 class ="name">{{ name_2 }}</h1>
                    <Summary class ="summary" v-if="name_2 !== null" :locName="name_2"></Summary>
                    <WeatherWidget v-if="name_2 !== null" :locName="name_2"></WeatherWidget>
                    <MapWidget  v-if="name_2 !== null" :locName="name_2"></MapWidget>
                <h3 class="title" v-if="name_2 === null">Please select a location to compare</h3>
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
import Summary from '@/components/Summary.vue'
import WeatherWidget from '@/components/WeatherWidget.vue'
import MapWidget from '@/components/MapWidget.vue'
import ImageWidget from '@/components/ImageWidget.vue'

export default {
    name: 'Compare',
    components: {
        Summary,
        WeatherWidget,
        MapWidget,
        ImageWidget
    },
    props: {
        locNames_1: {
            type: String,
            required: false,
            default: null
        },
        locNames_2: {
            type: String,
            required: false,
            default: null
        }
    },
    data() {
        return {
            name_1: null,
            name_2: null,
            selected_1: false,
            selected_2: false,
        };
    },
    methods: {
        onClick1(loc) {
            var self = this;
            self.name_1 = null
            self.name_1 = loc
            self.selected_1 = true
        },
        onClick2(loc) {       
            var self = this;
            self.name_2 = loc
            self.selected_2 = true
        },
        clear(){
            window.location.reload();
        }
    }
}
</script>

<style scoped>
.name{
    height: 100px;
    padding: 10px;
}
.summary{
    height: 300px;
    width: 80%;
    margin: auto;
    padding: 10px;
}
.locContainer{
    display: flex;
    margin: auto;
    padding: 10px;

}
.secondBox{
    width: 45%;
    margin: auto;
    padding: 10px;
    height: 100%;

}
</style>