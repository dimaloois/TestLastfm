<template>
  
  
    <v-card class="ArtistsChartItem"  >  
      <router-link :to="{name:'BestAlbums'}" >
        <div class="ArtistsChartItem__block" @click="GetArtistName()">
      <p>Atrist: <br>{{ artist_data.name }}</p><hr>    
      <p>Playcount: <br>{{ artist_data.playcount }}</p><hr>
      <p>Listners: <br>{{ artist_data.listeners }}</p>
      </div>
       </router-link>
       
    </v-card>
    
  
</template>

<script>


export default {
  name: 'ArtistsChartItem',
  components: {
  },
  props: {
    artist_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {
      topalbums:[],
    }
  },
  mounted() {
    
    
  },
  beforeDestroy() {},
  
  watch:{
      
  },

  methods: {

    GetArtistName(){
      this.$lastfm.methods.artistname = this.artist_data.name;
    },
    
    

   
  }
}
</script>

<style lang="scss">
  .ArtistsChartItem{
    background: url(https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png) center/cover no-repeat;
    display: flex;
    flex-basis: 30%;
    height: 100%;
    max-height: 300px;
    box-shadow: 0 0 10px 0 white;
    padding: 0px ;
    margin: 40px 0px;
    flex-direction: column;
    text-align: center;
    font-size: 24px;
    hr{
      border: 0.5px solid black;
    }

    p{
      margin: 10px;
      color: black;
      font-weight: 500;
    }

    p:hover{
      opacity: 0.7;
    }
  }
  .ArtistsChartItem__block:hover{
    
    background: white;
  }
</style>
