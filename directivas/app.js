let myapp = new Vue({
   el:"#app",
   // esta funcion del objeto vue devuelve las propiedades que utilizaremos en las expresiones del html
   // dos formas investigar luego

   // data:{
   //    name:"jeyson"
   // }
  
   data(){
      return {
         name:"jeyson gino",
         tema:"Bitcoin",
         img:"https://cryptologos.cc/logos/bitcoin-btc-logo.png",
         changePorcent:1,
         relative:"relative",
         priceDay:8400,
         fondoCont: "f4f4f4",
         prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
         pricesWhitDays:[
            {day:"lunes", value:8400},
            {day: "martes", value:7900},
            {day: "miercoles", value:8200},
            {day: "jueves", value:9000},
            {day: "viernes", value:9400},
            {day: "sabado", value:10000},
            {day: "domingo", value:10200}
         ],
         showPrices: false
         
         
      }
   },
   methods: {
      // estas funciones se pueden usar en diferentes contextos pero principal mente se van a utilizar para atacharse alos eventos que pueden ser disparados por las vistas 
      toggleShowPrices() {
         // 
         this.showPrices = !this.showPrices
         this.fondoCont = this.fondoCont.split("").reverse().join("")
      }
   } 
})

