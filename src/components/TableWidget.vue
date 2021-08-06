<template>
  <div >
    <b-table class="center" striped hover :items="data" ></b-table>
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
    var txt = null
    
    locationData.data.forEach((x) => {
      if (x.wiki === this.locName) {
        var url = "https://" + x.wiki;
      }
      
    });

    txt = '{"name":"John", "age":30, "city":"New York"}'
    var obj = JSON.parse(txt);

    var data = []
    Object.keys(obj).forEach(function(k){
      var d = {
                title : k,
                value : obj[k]
            };
      data.push(d)

    });

    console.log(data)
    return {
      data : data
    }
    
  },
};
</script>

<style scoped>
.center{
  width: 50%;
  margin: auto;
}
</style>