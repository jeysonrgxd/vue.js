// Las props son atributos personalizados que usted puede registrar en un componente. Cuando se pasa un valor a un atributo prop, se convierte en una propiedad en esa instancia de componente

Vue.component("CoinDetail", {
   props:['name'],
   data(){
      return{

      }
   },
   template : `
      <p><strong> {{ name }} </strong></p>
   `
   


})

let myapp = new Vue({
   el: "#app",
   data() {
      return {
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
      toggleShowPrices() {
         this.showPrices = !this.showPrices
         this.fondoCont = this.fondoCont.split("").reverse().join("")
      }
   }
})
