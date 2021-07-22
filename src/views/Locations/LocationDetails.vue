<template>
    <div class="location">
        <div ><img src="https://lh3.googleusercontent.com/olCsisxWA8GeqXwIjddoYALtnRMD0IujC8yfdjax_LNQSC_Wugsu3jltr36vdVZcFJK2jCSWBzrO6LFmgYg5_nfemrUDhC8NdN6LOFtQCoWUeldP3Bw9FyWCZFlS3BiIdNgiBHzVBvx1Wx_7HueZnaQ11CUzjYwf4S3_E3ifVo6GwQ-X3JUWuPw_RTZCTBzJ-e-hi5P1ywdySXRQ0uXX1Ii54UmO-6aXwd5iaS62ANDnyvAG_Bd2GZEIhuyoG5d0NNem_t37DxhdWcDBm5TnZJQP67gLt9Qla4cu8ep3ghPryJmAMhGHSFh6JRpWMBEmU8iFKEN4p6TiGcYiKJrWGiUbFQF-vqsA0Tu1_BmbMeJ9bebtEwYsa60_fNqgOe5eBSYEzFUhdJvn1XhuX2u3TB9Yc7JIqZO0jqjPYDpK4Dgr2mgspJatm6tXGubr3N8HE2YS76uNCkh5joIN8qqerlea0qHn80fsmwC2JVtCpwRlJqAJbRHAWn7R-XDF5SxY7lkYw07BWPqoYdvH15qL92vRPQkB4RfOu9qrFerBcYOpx7tEwIaChm-vjJKnqw35TM9IBF-yfMb7z5b_idUOO82zvdqiO8issTjwNhFSj2LQ0R_7RRMPQzSO8tXR4bA7_dRur6NPuQtJlOTMyVfS4r6Lq-zMDr8yVpNutfT4J9E0Imn8mvJOZLhYDm9SWEVZs7DioKCpbrpyMW8Ro9pa8Fr9=w960-h540-no?authuser=0" class="card-img-top" alt="Painted Hills" width="500" height="400"></div>
        <h1 class ="title">{{ name }}</h1>
        <div class ="summary">
            <Summary></Summary>
        </div>
        
        <div class="locContainer">
            <div class="left secondBox">
                <WeatherWidget></WeatherWidget>
            </div>
            <div class="left secondBox">
                <MapWidget></MapWidget>
            </div>
        </div>

        <b-dropdown id="dropdown-1" text="Check another location!" class="m-md-2" variant="success" size="lg">
                        <b-dropdown-item>Columbia River Gorge</b-dropdown-item>
                        <b-dropdown-item>Crater Lake</b-dropdown-item>
                        <b-dropdown-item>Painted Hills</b-dropdown-item>
                        <b-dropdown-item>Oregon Coast</b-dropdown-item>
                        <b-dropdown-item>Smith Rock</b-dropdown-item>
                        <b-dropdown-item>The Wallowas</b-dropdown-item>
                        <b-dropdown-item>Mt. Hood</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
        </b-dropdown>

        <b-button variant="success" size="lg">Compare with another location!</b-button>
    </div>
</template>

<script>
import Summary from '@/components/Summary.vue'
import WeatherWidget from '@/components/WeatherWidget.vue'
import MapWidget from '@/components/MapWidget.vue'

export default {
    components: {
        Summary,
        WeatherWidget,
        MapWidget
    },
    data(){
        
        return{
        name: this.$route.params.locname
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
</style>