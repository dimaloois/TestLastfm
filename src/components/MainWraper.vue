<template>
  <div class="MainWraper" >
        <router-view></router-view>    
  </div>
</template>



<script>
export default {
  name: 'MainWraper',
  components: {
  },
  props: {},
  data() {    
    return {     
    }
  },
  mounted() {
  },
  beforeDestroy() {},
  
  methods:{
    },  
  }
</script>



<style lang="scss">
.MainWraper {   
      display: flex;
      max-width: 100%;
      justify-content: center;
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
      
}
</style>
