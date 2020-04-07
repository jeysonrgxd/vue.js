<template>
   <div class="flex-col">
    <template :v-if="asset.id">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            class="w-20 h-20 mr-5"
            :title="asset.id"
          />
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span>{{ asset.priceUsd | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio mas bajo</b>
              <span></span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio mas alto</b>
              <span></span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span></span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variacion 24hs</b>
              <span>{{ asset.changePercent24Hr | percent }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >Cambiar</button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>

          <span class="text-xl"></span>
        </div>
      </div>
    </template>
  </div>


</template>

<script>
import api from '@/api' 

export default {
   name:'CoinDetail',

   data(){
      return{
         // creamos una variable de vue para almacenar los datos que nos traere la api en es caso de tipo objeto debido a que la api nos da un json (un objeto)
         asset:{}
      }
   },
// usamos el hook para traer datos de la api y ponerlas en la variable de clase assets
   created(){
      // esto es para que cada vez que sea llamado este componente me llame a un metodo de esta instacia de vue el cual es un llamado a la api y puede generar mi contenido como su fuera una plantilla definida para los diferentes tipo de monedas (piolasa)
      this.getCoin()
   },

   methods:{
      getCoin(){
         // esto permite a acceder a tipo de valores de la raute que nos proporciona la url
         const id = this.$route.params.id
         api.getAsset(id)
         .then(resp => {
            console.log(resp.symbol.toLowerCase());
            this.asset = resp
         })
      }
   }
}
</script>