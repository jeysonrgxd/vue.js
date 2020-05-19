// importamos de dos formar la primera la tradicional, la segunda forma es mas que todo es que bamos atraer el codigo pero no importa ningún valor ejecutando claro el live server

// import counter from './chilld_components/counter.js'
import './chilld_components/counter.js'
let myapp = new Vue({
   el: "#app",

   data() {
      return {
         title: "Componente"
      }
   }
})
