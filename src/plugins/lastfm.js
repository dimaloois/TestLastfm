import axios from 'axios'



const BASE_URL = 'http://ws.audioscrobbler.com/2.0/'
const API_KEY = 'c2797e2442ddb38a50280e1e697fa316'
const limit = 50



const lastfm = {

  data(){
    return{
   
     
    }
  },
  components:{
    
  },
  mounted(){
    
  },
  methods:{
    topartist:[], 
    artistpage: 1,
    // getTopArtist(){
    //   this.artistpage += 1;
    //   axios.get(`${BASE_URL}?method=chart.gettopartists&page=${this.artistpage}&limit=${limit}&api_key=${API_KEY}&format=json`).then((response) => {
    //     this.topartist.push(...response.data.artists.artist);
    //     console.log(response);
    //     this.loading = true;
    //   });
    // },
    async getTopArtist(){
      this.loading = true;      
        const response = axios.get(`${BASE_URL}?method=chart.gettopartists&page=${this.artistpage}&limit=${limit}&api_key=${API_KEY}&format=json`)
        this.topartist = ((await response).data.artists.artist);
        console.log((await response).data.artists.artist);
        this.artistpage += 1;
    },
    
    toptracks:[],
    trackspage: 1,
    async getTopTracks(){
      const response = axios.get(`${BASE_URL}?method=chart.gettoptracks&page=${this.trackspage}&limit=${limit}&api_key=${API_KEY}&format=json`)
      this.toptracks = (await response).data.tracks.track;
      this.trackspage += 1;
      // console.log((await response).data.tracks.track, 'topSONGS')
    },
    topalbums:[], 
    artistname: '',
    aloading: false,       
    async getTopAlbums(){     
     const response = axios.get(`${BASE_URL}?method=artist.gettopalbums&artist=${this.artistname}&limit=${10}&api_key=${API_KEY}&format=json`)
     this.topalbums = (await response).data.topalbums.album;
     this.aloading = true;
    //  console.log(this.topalbums,'TopAlbums');
  },
  albumname: '',
  albuminfo:[],
  bloading: false,
  async getAlbumInfo(){
    const response = axios.get(`${BASE_URL}?method=album.getinfo&api_key=${API_KEY}&artist=${this.artistname}&album=${this.albumname}&format=json`)
    this.albuminfo = (await response).data.album;
    this.bloading  = true;
    console.log(this.albuminfo,'Albuminfo');
  }
  },
  
  
  
}

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$lastfm', {value: lastfm})
        
  }
}