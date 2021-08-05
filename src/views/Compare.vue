<template>
    <div class="location">
        <h3 class="title">Let's compare locations</h3>
        
        <div class="locContainer">
            <div class="left secondBox">
                <div>
                    <b-dropdown id="dropdown-1" text="Choose location to compare" class="m-md-2" variant="success" size="lg">
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
                <div v-if="locNames_1 !== null" style="width: 500px; margin: auto; padding: 20px;">
                    <ImageWidget v-if="locNames_1 !== null" :locName="locNames_1" ></ImageWidget>
                </div>
                    <h1 class ="name">{{ locNames_1 }}</h1>
                    <Summary class ="summary" v-if="locNames_1 !== null" :locName="locNames_1"></Summary>
                    <WeatherWidget  v-if="locNames_1 !== null" :locName="locNames_1"></WeatherWidget>
                    <MapWidget v-if="locNames_1 !== null" :locName="locNames_1"></MapWidget>
                <h3 class="title" v-if="locNames_1 === null">Please select a location to compare</h3>
                <br>
                <br>
                <br>
            </div>
            <div class="right secondBox">
                <div>
                    <b-dropdown id="dropdown-1" text="Choose location to compare" class="m-md-2" variant="success" size="lg">
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
                <div v-if="locNames_2 !== null" style="width: 500px; margin: auto; padding: 20px;">
                    <ImageWidget v-if="locNames_2 !== null" :locName="locNames_2" ></ImageWidget>
                </div>
                <h1 class ="name">{{ locNames_2 }}</h1>
                    <Summary class ="summary" v-if="locNames_2 !== null" :locName="locNames_2"></Summary>
                    <WeatherWidget v-if="locNames_2 !== null" :locName="locNames_2"></WeatherWidget>
                    <MapWidget  v-if="locNames_2 !== null" :locName="locNames_2"></MapWidget>
                <h3 class="title" v-if="locNames_2 === null">Please select a location to compare</h3>
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
    methods: {
        onClick1(loc) {
            this.locNames_1 = loc
        },
        onClick2(loc) {       
            this.locNames_2 = loc
        }
    },
    computed: {
        Locs: function () {
            return this.props;
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