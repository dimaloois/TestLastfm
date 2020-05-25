<template>
<keep-alive>
  <div class="BestAlbumsItem">
    <router-link :to="{name:'AlbumsInfo'}">
        <div class="BestAlbumsItem__image" @click="GetArtistAndAlbumName()"><img v-bind="this.GetPics()" :src=" this.picks " alt="" ></div>
        <div class="BestAlbumsItem__data" @click="GetArtistAndAlbumName()">    
        <p>Album name: <br>{{ album_data.name }}</p><hr>
        <p>Listners: <br>{{ album_data.playcount }}</p>
        </div>
   </router-link>
  
  </div>
  </keep-alive>
</template>

<script>
export default {
  name: 'BestAlbumsItem',
  components: {},
  props: {
     album_data: {
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
    
    // this.$lastfm.methods.getAlbumInfo(); 
  },
  beforeUpdated(){
    
      
  },
  created(){
    
  },
  beforeDestroy() {},
  methods: {
    GetPics(){
        this.picks = this.album_data.image[3]["#text"];
    },
    GetArtistAndAlbumName(){
      this.$lastfm.methods.artistname = this.album_data.artist.name;
      this.$lastfm.methods.albumname = this.album_data.name;
      console.log(this.$lastfm.methods.artistname);
      console.log(this.$lastfm.methods.albumname);
    },
  }
}
</script>




<style lang="scss">
  .BestAlbumsItem{
    
    display: flex;
    flex-basis: 40%;
    height: 470px;
    box-shadow: 0 0 10px 0 white;
    padding: 20px 10px 20px 10px;
    margin: 20px;
    flex-direction: row;
    justify-content: center;
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
     p:hover{ 
      opacity: 0.6;
      color: grey;
    }
  }
</style>
