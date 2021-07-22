<template>
    <!-- <img :src="imgLink"> -->
    <div>
      <h2>Map section</h2>
      <!-- <img :src="imgLink"> -->
    </div>
</template>

<script>

export default {
  name: 'Map',
  data(){
        return{
            name: this.$route.params.locname,
            imgLink: "https://www.nps.gov/crla/planyourvisit/images/Crater-Inset-Map-winter-version-for-Website-with-red-roads-10-314-01.jpg?maxwidth=1200&maxheight=1200&autorotate=false"
        }
    }
}
</script>
