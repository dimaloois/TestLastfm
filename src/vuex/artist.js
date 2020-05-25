import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


 


Vue.use(Vuex);

let artist = new Vuex.Store( {
    state:{
        artists: [],
    },
    mutation:{
      SET_PRODUCTS_TO_STATE: (state, artists) => {
        state.artists = artists;
        
      }
    },
    actions:{ GET_PRODUCTS_FROM_API({commit}) {
        return axios(`${this.$BASE_URL}?method=chart.gettopartists&page=${this.page}&limit=${this.$limit}&api_key=${this.$API_KEY}&format=json`, {
          method: "GET"
        })
          .then((artists) => {
            commit('SET_PRODUCTS_TO_STATE', artists.data);
            
            return artists;
          })
          .catch((error) => {
            console.log(error)
            return error;
          })
      }},
        
    getters:{
      PRODUCTS(state){
        
        return state.artists;
      }
    },
});



export default artist;