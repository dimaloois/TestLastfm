<template>

  <v-container class="AlbumsInfo">
    
    <v-container class="AlbumsInfo__container"> 
      
      <div class="AlbumsInfo__title" v-bind="albuminfo"> {{ albuminfo.name }} </div>
      
      <div class="AlbumsInfo__container2">
        <div class="AlbumsInfo__info"><span> Playcount: <br> {{  albuminfo.playcount  }}</span></div>
          <div class="AlbumsInfo__image"><img :src=" this.pic " alt=""></div> 
        <div class="AlbumsInfo__info"><span> Listeners: <br> {{ albuminfo.listeners }} </span></div>
      </div>
      <v-list class="AlbumsInfo__songlist">
        <v-list-item-title> <span class="songlist__title"> TrackList</span></v-list-item-title>
        <v-list-item class="songlist__item"
                    v-for="track in this.tracks"
                    :key="track.name">
          <p>{{ track.name }}</p>
          <p>{{  Math.floor(track.duration / 60) + ':' + track.duration % 60 }}</p>
        </v-list-item>
      </v-list>
    </v-container>
    
  </v-container>
</template>

<script>
export default {
  name: 'AlbumsInfo',
  components: {},
  props: {},
  data() {
    return {
      loading:false,
      albuminfo: [],
      pic:[],
      tag:[],
      tracks:[],
    }
  },
  computed:{
    
  },
  mounted() {
    this.$lastfm.methods.getAlbumInfo();
    this.GetAlbumInfo();
  },
  beforeDestroy() {},
  methods: {
   GetAlbumInfo(){  
      if(this.$lastfm.methods.bloading == true){
          this.albuminfo = this.$lastfm.methods.albuminfo;
          this.getPic();
          this.tracks = this.albuminfo.tracks.track;
          this.$lastfm.methods.bloading = false;
          console.log(this.tracks, 'nhtrb');
          console.log(this.albuminfo);
      } else{  
            setTimeout(() => {
            this.GetAlbumInfo();
            }, 100);
      }
    },
    getPic(){
        this.tag = this.albuminfo.tags.tag[0].name;
        this.pic = this.albuminfo.image[3]["#text"];
        
    }
  }
}
</script>

<style lang="scss">

.songlist__title{
  font-size: 30px;
  letter-spacing: 3px;
}

.AlbumsInfo {
    display: flex;
    
		&__container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 1100px;
      width: 100%;
      margin-top:50px;
		}

	
		&__title {
      margin: 0 auto;
      display: flex;
      color: white;
      font-weight: 800;
      font-size: 54px;
      margin-bottom: -20px;
		}

		
		&__container2 {
      display: flex;
      width: 100%;
      height: 360px;
      
		}

		&__image {
      border: white 1px solid;
      margin: auto auto;
    }

    &__info{
      margin: auto auto;
      flex-basis: 20%;
    }
    
    &__info span{
      color: white;
      font-size: 28px;
      line-height: 30px;
    }

		&__songlist {
      width: 50%;
      display: flex;
      flex-direction: row;
    }
    
}

.songlist__item{
      font-size: 16px;
      display: flex;
    }
    
    .songlist__item p{
      text-align: center;
      margin: auto;
    }

   



</style>
