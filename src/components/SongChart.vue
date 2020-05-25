<template>
 <v-container class="SongChart" >
   <div class="SongChart__title"><h1>SONGS CHART</h1></div>   
    <v-container class="SongChart__list" > 
      <SongChartItem            
            v-for="(track, index) in this.toptracks"
            :key="index"
            :track_data="track"/>
    </v-container>
     <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </v-container>
</template>

<script>
import SongChartItem from './SongChart-item.vue'

export default {
  name: 'SongChart',
  components: {
    SongChartItem,
    
  },
  props: {},
  data() {
    return {      
      toptracks:[],
      a: true,
    }
  },
  mounted() {
  },
  beforeDestroy() {},
  methods: {
     infiniteHandler($state){
        if(this.a == true){
          setTimeout(() => {
            this.$lastfm.methods.getTopTracks();
            this.toptracks.push(...this.$lastfm.methods.toptracks);
            $state.loaded();
          }, 1000);
        }
      }
  }
}
</script>

<style lang="scss">
  .SongChart {
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
