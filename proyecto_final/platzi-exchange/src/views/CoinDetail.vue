<template>
  <div class="flex-col">
    <div class="flex justify-center">
      <bounce-loader :loading="isloading" :color="'#68d391'" :size="100" />
    </div>

    <template v-if="!isloading">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img
            :src="
              `https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`
            "
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
              <span>{{ min | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio mas alto</b>
              <span>{{ max | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span>{{ avg | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variacion 24hs</b>
              <span>{{ asset.changePercent24Hr | percent }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            @click="toggleConverter"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            {{
              fromUsd ? `USD a ${asset.symbol}` : `${asset.symbol} a USD` 
            }}
          </button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                v-model="convertValue"
                :placeholder="`valor en ${fromUsd ? 'USD' : asset.symbol}`"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>

          <span class="text-xl">{{ convertResult }} {{ fromUsd ? asset.symbol : "USD" }}</span>
        </div>
      </div>

      <!-- hay muchos template nos podemos fijar en la documentacion de chartkick pero en esta caso usaremos este template -->
      <line-chart
        class="my-10"
        :colors="['orange']"
        :min="min"
        :max="max"
        :data="history.map(h => [h.date, parseFloat(h.priceUsd).toFixed(2)])"
      />

      <!-- poner el codigo -->

      <h3 class="text-xl my-10">Mejores Ofertas de Cambio</h3>
      <table>
        <!-- asignamos doy llaver de verificacion ya que hay datos con el id mismo pero diferente precio -->
        <tr
          v-for="m in markets"
          :key="`${m.exhangeId}-${m.priceUsd}`"
          class="border-b"
        >
          <td>
            <b>{{ m.exchangeId }}</b>
          </td>
          <td>{{ m.priceUsd | dollar }}</td>
          <td>{{ m.baseSymbol }} / {{ m.quoteSymbol }}</td>
          <td>
            <px-button
              :isloading="m.isloading"
              v-if="!m.url"
              @custom-click="getWebsite(m)"
            >
              Obtener Link
            </px-button>

            <a v-else class="hover:underline text-green-600" target="_blanck">
              {{ m.url }}
            </a>
          </td>
        </tr>
      </table>
    </template>
  </div>
</template>

<script>
import api from "@/api";
import PxButton from "@/components/PxButton";

export default {
  name: "CoinDetail",

  components: {
    PxButton
  },

  data() {
    return {
      isloading: false,
      // creamos una variable de vue para almacenar los datos que nos traere la api en es caso de tipo objeto debido a que la api nos da un json (un objeto)
      asset: {},
      history: [],
      markets: [],
      fromUsd:true,
      convertValue:null
    };
  },

  computed: {

    convertResult(){
      if(!this.convertValue){
        return 0
      }
      const result = this.fromUsd ? this.convertValue/this.asset.priceUsd : this.convertValue * this.asset.priceUsd

      return result.toFixed(4)
    },

    min() {
      // este codigo ...this.history.map(e => e.priceUsd) devuelve un array con todos los precios de los objetos para asi poder trabajar con el Math.min
      return Math.min(
        ...this.history.map(e => parseFloat(e.priceUsd).toFixed(2))
      );
    },

    max() {
      return Math.max(
        ...this.history.map(e => parseFloat(e.priceUsd).toFixed(2))
      );
    },

    avg() {
      let listnum = this.history.map(e => parseFloat(e.priceUsd));
      let sumlist = listnum.reduce((previous, current) => previous + current);
      return sumlist / listnum.length;
    }
  },

  watch:{
    $route(){
      this.getCoin()
    }
  },

  // usamos el hook para traer datos de la api y ponerlas en la variable de clase assets
  created() {
    // esto es para que cada vez que sea llamado este componente me llame a un metodo de esta instacia de vue el cual es un llamado a la api y puede generar mi contenido como su fuera una plantilla definida para los diferentes tipo de monedas (piolasa)
    this.getCoin();
  },

  methods: {
    toggleConverter(){
      this.fromUsd = !this.fromUsd
    },

    getWebsite(exchange) {
      this.$set(exchange, "isloading", true);
      return api
        .getExchange(exchange.exchangeId)
        .then(resp => {
          // esta propiedad no ayuda a poder insertar propiedades despues de que se aya creado el componente ya que si no utilizamos esto vue no crackeara la pripiedad y por ende no tendremos el cambio en tiempo real, para eso se utiliza esto mas que todo en array y objetos
          this.$set(exchange, "url", resp.exchangeUrl);
        })
        .finally(() => {
          this.$set(exchange, "isloading", false);
        });
    },

    getCoin() {
      this.isloading = true;

      // esto permite a acceder a tipo de valores de la raute que nos proporciona la url
      const id = this.$route.params.id;
      Promise.all([
        api.getAsset(id),
        api.getAssetHistory(id),
        api.getMarkets(id)
      ])
        .then(([asset, history, markets]) => {
          this.asset = asset;
          this.history = history;
          this.markets = markets;
        })
        .finally(() => (this.isloading = false));
    }
  }
};
</script>
