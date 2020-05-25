import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'

Vue.use(InfiniteLoading, {
    slots: {
      noMore: 'No more message', // you can pass a string value
       // you also can pass a Vue component as a slot
    },
    props:{
      distance:1000,
    },
    
    
  });


export default InfiniteLoading;