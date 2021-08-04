<template>
    <div>
        <p>{{ content }}</p>
        
    </div>
  
</template>

<script>

import locationData from '@/locationData.json'


export default {
    props: {
    locName: {
      type: String,
      required: true,
      default: "none"
    },
  },
    data(){
        var summary = null;
        locationData.data.forEach(x => {
            
            if(x.name === this.locName) summary = x.summary
        });
        
        return{
            content: summary,
        }
    
  }
}
</script>