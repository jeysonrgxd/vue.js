<template>
   <div>
      <ul class="list-group">
         <li v-for="(item,index) of arr_orden" :key="item.id" v-on:click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
            {{item.nombre}}
            <span class="badge badge-primary badge-pill"> {{item.cantidad}} </span>
         </li>
      </ul>
      <button class="btn btn-danger btn-block" v-on:click="reiniciar">Reiniciar</button>
   </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

// ver este ejercicio en el curso ya que tambien hay errores
export default {
   name:"lista",
   computed:{
      ...mapState(['frutas']),
      
      arr_orden(){
         return this.ordenar_array()
      }
   },
   methods: {
      ...mapMutations(["aumentar","reiniciar"]),
      ordenar_array(){
         return this.frutas.sort((a,b)=> b.cantidad - a.cantidad)
      }
   },
}
</script>