import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre:"manzana",cantidad:0},
      {nombre:"pera",cantidad:0},
      {nombre:"mandarina",cantidad:0}
    ]
  },
  mutations: {
    aumentar(state,id){
      state.frutas[id].cantidad ++
    },
    reiniciar(){
      this.state.frutas.forEach(element => {
        element.cantidad = 0
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
