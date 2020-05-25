<template>
  <v-container class="ArtistsChart" >
    <div class="ArtistsChart__title"><h1>ARTISTS CHART</h1></div> 
    <v-container class="ArtistsChart__list"> 
      <ArtistsChartItem 
                     
            v-for="(artist, $index) in this.topartist"
            :key="$index"
            :artist_data="artist"         
            />     
    </v-container>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>  
  </v-container>   
</template>



<script>
import ArtistsChartItem from './ArtistsChart-item.vue'

export default {
  name: 'ArtistsChart',
  components: {
     
    ArtistsChartItem,  
  },
  props: {
  },
  data() {
    return {     
      topartist:[],
      a: true,   
    }
  },
  created(){ 
  },
  mounted(){
  },
  updated(){
    },
  beforeDestroy() {this.CleanTop();},
  
  methods: {
    CleanTop(){
    this.topartist = [];
  },
       infiniteHandler($state){
        if(this.a == true){
          setTimeout(() => {
            this.$lastfm.methods.getTopArtist();
            this.topartist.push(...this.$lastfm.methods.topartist);
            $state.loaded();
          }, 1000);
          
        }
      }
  },  
}
</script>

<style lang="scss">
  
  .ArtistsChart {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    width: 100%;
    font-size: 20px;
    &__title{
      display: flex;
      margin: 0 auto;
      height: 100px;
      max-width: 900px;
      width: 100%;
    }
    &__title h1{
      margin: 20px auto 0 auto;
      font-size: 70px;
      color: white;
      word-spacing: 40px;
      letter-spacing: 10px;
    }
		&__list {    
      margin-top: 40px; 
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
		}


    
}

</style>
