// Las props son atributos personalizados que usted puede registrar en un componente. Cuando se pasa un valor a un atributo prop, se convierte en una propiedad en esa instancia de componente

Vue.component("CoinDetail", {

   // tener encuenta las mayusculas 
   props: ['name', "showprices", "img", "tema", "value", "priceDay", "symbol", "changeporcent", "prices", "priceswhitdays", "fondocont","relative"],

   data(){
      return{
         // para mutar las variables que nos da props debemos crear aqui en data un atributo y asignarle el atributo de prop por medio de this solo asi podemos mutar el valor
         showPrices: this.showprices,
         newValue : this.value,
         fondoTotal : this.fondocont
      }
   },
// recordar que tenmos que encerrar todo en un div para que entienda que solo es un componente

// rrecordar tambien que tenemos que usar las propiedades de este componente (tambien el de props)
   template : `
   <div v-bind:style="{background: '#' + fondoTotal, position:relative}">

      <p><strong> {{ name }} </strong></p>

      <img v-on:mouseenter="toggleShowPrices" v-on:mouseleave="toggleShowPrices" v-bind:src="img" v-bind:title="tema">

      <br>

      <input type="number" v-model="newValue"><br>
      <span>valor entrante : <strong> {{ newValue }} </strong></span><br>
      <span>Precio convertido del BTC : <strong> {{ convertedValue }} </strong></span>

      <slot name="text"></slot>
      <slot name="link"></slot>

      <h2>

         {{ title }}
         <span v-if="changeporcent > 0">👍</span>
         <span v-else-if="changeporcent < 0">👎</span>
         <span v-else>🤞</span>

         <span v-show="changeporcent > 0">👍</span>
         <span v-show="changeporcent == 0">🤞</span>
         <span v-show="changeporcent < 0">👎</span>

         <span v-on:click="toggleShowPrices">
            {{ showPrices ? "🙉" : "🙈"}}
         </span>

      </h2>

      <h2>Listas de precios del Bitcoin</h2>

      <ul v-show="showPrices">
         <li class="fontbold" v-bind:class='priceDay > price ? "green" : "red"' v-for="(price, indice) in prices"
            v-bind:key="price">
            {{ indice }} - {{ price }}
         </li>
      </ul>

      <h2>Listas de precios con dias del Bitcoin</h2>

      <ul>
         <li class="uppercase fontbold"
            v-bind:class="{orange: priceDay === price.value, red : priceDay < price.value, green: priceDay > price.value}"
            v-for="(price, indice) in priceswhitdays" v-bind:key=price.day>
            {{ indice }} : {{ price.day }} - {{ price.value }}
         </li>
      </ul>


   </div>
   `
   ,

   methods: {
      toggleShowPrices() {
         this.showPrices = !this.showPrices
         console.log(this.changeporcent)
         this.fondoTotal = this.fondoTotal.split("").reverse().join("")
         console.log(this.fondoTotal);

         // emitimos un evento para interactuar con el padre, con esta funcion podemos indicarle que nuestro componente  tiene que emitir un evento llamado changeColor cadavez que se ejecute este metodo
         this.$emit('change-color', this.showPrices ? "9399ff" : "")
      },


   },

   computed: {
      title() {
         return `${this.tema} - ${this.symbol}`
      },
      convertedValue() {
         if (!this.newValue) {
            return this.newValue
         }
         return parseInt(this.newValue) / parseInt(this.priceDay)
      }
   }
   


})

let myapp = new Vue({
   el: "#app",
   data() {
      return {
         fondopadre: "#434e52",
         name: "jeyson gino",
         symbol: 'BTC',
         tema: "Bitcoin",
         img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
         changePorcent: 1,
         relative: "relative",
         priceDay: 8400,
         value: 0,
         fondoCont: "f4f4f4",
         prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
         pricesWhitDays: [{
               day: "lunes",
               value: 8400
            },
            {
               day: "martes",
               value: 7900
            },
            {
               day: "miercoles",
               value: 8200
            },
            {
               day: "jueves",
               value: 9000
            },
            {
               day: "viernes",
               value: 9400
            },
            {
               day: "sabado",
               value: 10000
            },
            {
               day: "domingo",
               value: 10200
            }
         ],
         showPrices: false


      }
   },

   computed: {
      title() {
         return `${this.tema} - ${this.symbol}`
      },
      convertedValue() {
         if (!this.value) {
            return this.value
         }
         return this.value / this.priceDay
      }
   },

   watch: {
      showPrices(newVal, oldVal) {
         console.log(newVal, oldVal)
      }

   },

   methods: {
      updateColor(color) {
         this.fondopadre = color || this.fondopadre.split("").reverse().join("")
      }
   }
})
