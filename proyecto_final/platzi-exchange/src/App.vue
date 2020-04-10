<template>
  <main>
    <!-- kybas keys -->
    <px-header
      :links="links"
    ></px-header>

    <!-- removemos el componente que pusimos para poner un componente que nos da vue roter -->
    <router-view
      class="container px-5 sm:px-20 py-20 flex justify-center"
    ></router-view>
  </main>
</template>

<script>
// importamos los componentes que utilizaremos
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  data(){
    return{
      links:[
        {
          title:'BTC',
          to:{name:'coin-detail',params:{id:'bitcoin'}}
        },
        {
          title:'ETH',
          to:{name:'coin-detail',params:{id:'ethereum'}}
        },
        {
          title:'XRP',
          to:{name:'coin-detail',params:{id:'ripple'}}
        }
      ]
    }
  },
  // pacas keys
  components: {
    PxHeader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
