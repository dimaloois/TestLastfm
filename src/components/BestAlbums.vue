<template>
  <div class="BestAlbums" >
    <div class="BestAlbums__list" >
      
      <BestAlbumsItem
                      v-for="(album, $index) in this.topalbums"
                      :key="$index"
                      :album_data="album"/>      
    </div>
    
  </div>
</template>



<script>
import BestAlbumsItem from './BestAlbums-item'



export default {
  name: 'BestAlbums',
  components: { BestAlbumsItem },
  props: {},
  data() {
    return {
      topalbums: [],
    }
  }, 
  mounted() {
    this.$lastfm.methods.getTopAlbums();
    this.GetTopAlbums(); 
  },
  beforeDestroy() {},
  methods: {
    GetTopAlbums(){  
      if(this.$lastfm.methods.aloading == true){
          this.topalbums = this.$lastfm.methods.topalbums;
          this.$lastfm.methods.aloading = false;
      } else{  
            setTimeout(() => {
            this.GetTopAlbums();
            }, 100);
      }
    },
  }
}
</script>

<style lang="scss">
  .BestAlbums {
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    width: 100%;
    
		&__list {     
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
		}
}

</style>
