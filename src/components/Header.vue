<template>
  <v-app-bar app class="Header">
    <div class="Header__title"> <router-link :to="{name:'ArtistsChart'}" class="link"><h2>LastFM Chart</h2></router-link></div>
    <div class="Header__link">
      <ul>
        <li><router-link :to="{name:'ArtistsChart'}" class="link"><p>BestArtists</p> </router-link></li>
        <li><router-link :to="{name:'SongChart'}" class="link"><p>BestSongs</p> </router-link></li>
      </ul>
    </div>
    
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss">
.Header {
  position: fixed;
  top: 0;
  max-width: 100%;
  height: 100px;
  display: flex;
  width: 100%;

		&__title {
      color: white;
      margin: auto 0px auto 5%;
		}

		&__link {
      font-size: 26px;
      margin: auto auto;
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
    
    &__link ul{
      margin-top: 10px;
      margin-right: 40%;
      display: flex;
    }
    
    &__link li{     
      text-decoration: none;
      margin: 0px 100px 0px 100px;
    }
    
    &__link p{ 
      text-decoration: underline;
    }
    
    .link{
      color: white;
    }
    .link:hover{
      color: grey;
      transition-duration: 0.5s;
    }

    h2{
      font-size: 40px;
      animation-name: title;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    @keyframes title {
     0%, 100% {
       filter: blur(0.5px);
        color: grey;
      }
      40%, 93%{
        filter: blur(0px);
        color: white;
      }
      
      
    }
}

</style>
