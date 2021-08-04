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
                <div v-if="locNames_1 !== null">
                    <img v-if="locNames_1 !== null" src="https://lh3.googleusercontent.com/olCsisxWA8GeqXwIjddoYALtnRMD0IujC8yfdjax_LNQSC_Wugsu3jltr36vdVZcFJK2jCSWBzrO6LFmgYg5_nfemrUDhC8NdN6LOFtQCoWUeldP3Bw9FyWCZFlS3BiIdNgiBHzVBvx1Wx_7HueZnaQ11CUzjYwf4S3_E3ifVo6GwQ-X3JUWuPw_RTZCTBzJ-e-hi5P1ywdySXRQ0uXX1Ii54UmO-6aXwd5iaS62ANDnyvAG_Bd2GZEIhuyoG5d0NNem_t37DxhdWcDBm5TnZJQP67gLt9Qla4cu8ep3ghPryJmAMhGHSFh6JRpWMBEmU8iFKEN4p6TiGcYiKJrWGiUbFQF-vqsA0Tu1_BmbMeJ9bebtEwYsa60_fNqgOe5eBSYEzFUhdJvn1XhuX2u3TB9Yc7JIqZO0jqjPYDpK4Dgr2mgspJatm6tXGubr3N8HE2YS76uNCkh5joIN8qqerlea0qHn80fsmwC2JVtCpwRlJqAJbRHAWn7R-XDF5SxY7lkYw07BWPqoYdvH15qL92vRPQkB4RfOu9qrFerBcYOpx7tEwIaChm-vjJKnqw35TM9IBF-yfMb7z5b_idUOO82zvdqiO8issTjwNhFSj2LQ0R_7RRMPQzSO8tXR4bA7_dRur6NPuQtJlOTMyVfS4r6Lq-zMDr8yVpNutfT4J9E0Imn8mvJOZLhYDm9SWEVZs7DioKCpbrpyMW8Ro9pa8Fr9=w960-h540-no?authuser=0" class="card-img-top" alt="Painted Hills" width="500" height="400"></div>
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
                <div v-if="locNames_2 !== null">
                    <img v-if="locNames_2 !== null" src="https://lh3.googleusercontent.com/olCsisxWA8GeqXwIjddoYALtnRMD0IujC8yfdjax_LNQSC_Wugsu3jltr36vdVZcFJK2jCSWBzrO6LFmgYg5_nfemrUDhC8NdN6LOFtQCoWUeldP3Bw9FyWCZFlS3BiIdNgiBHzVBvx1Wx_7HueZnaQ11CUzjYwf4S3_E3ifVo6GwQ-X3JUWuPw_RTZCTBzJ-e-hi5P1ywdySXRQ0uXX1Ii54UmO-6aXwd5iaS62ANDnyvAG_Bd2GZEIhuyoG5d0NNem_t37DxhdWcDBm5TnZJQP67gLt9Qla4cu8ep3ghPryJmAMhGHSFh6JRpWMBEmU8iFKEN4p6TiGcYiKJrWGiUbFQF-vqsA0Tu1_BmbMeJ9bebtEwYsa60_fNqgOe5eBSYEzFUhdJvn1XhuX2u3TB9Yc7JIqZO0jqjPYDpK4Dgr2mgspJatm6tXGubr3N8HE2YS76uNCkh5joIN8qqerlea0qHn80fsmwC2JVtCpwRlJqAJbRHAWn7R-XDF5SxY7lkYw07BWPqoYdvH15qL92vRPQkB4RfOu9qrFerBcYOpx7tEwIaChm-vjJKnqw35TM9IBF-yfMb7z5b_idUOO82zvdqiO8issTjwNhFSj2LQ0R_7RRMPQzSO8tXR4bA7_dRur6NPuQtJlOTMyVfS4r6Lq-zMDr8yVpNutfT4J9E0Imn8mvJOZLhYDm9SWEVZs7DioKCpbrpyMW8Ro9pa8Fr9=w960-h540-no?authuser=0" class="card-img-top" alt="Painted Hills" width="500" height="400"></div>
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

export default {
    name: 'Compare',
    components: {
        Summary,
        WeatherWidget,
        MapWidget
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
            console.log(this.locNames_1)
        },
        onClick2(loc) {
            
            this.locNames_2 = loc
            console.log(this.locNames_2)
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