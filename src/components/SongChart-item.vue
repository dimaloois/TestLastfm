<template>
  <v-container class="SongChartItem">
    <v-container class="SongChartItem__image"><img :src="this.picks" alt=""></v-container>
    <v-container class="SongChartItem__data"><p>Track: <br>{{ track_data.name }}</p><hr>    
    <p>Playcount: <br>{{ track_data.playcount }}</p><hr>
    <p>Listners: <br>{{ track_data.listeners }}</p></v-container>
  </v-container>
</template>

<script>
export default {
  name: 'SongChartItem',
  components: {},
  props: {
    track_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {
      picks:[],
    }
  },
  mounted() {
    this.GetPics(); 
  },
  beforeDestroy() {},
  methods: {
    GetPics(){
        this.picks = this.track_data.image[3]["#text"]; 
    }
  }
}
</script>

<style lang="scss">
  .SongChartItem{
    display: flex;
    flex-basis: 40%;
    height: 300px;
    box-shadow: 0 0 10px 0 white;
    padding: 20px 10px 20px 10px;
    margin: 20px;
    text-align: center;
    
    &__image{
      display: flex;
      flex: 1 1 50%;
    }

    &__data{
      display: flex;
      flex-direction: column;
    }

    hr{       
      border: 1px solid white;      
    }
    
    p{ 
      line-height: 30px;
      color: white;
    }
  }
</style>
