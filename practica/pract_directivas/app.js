let myapp = new Vue({

   el:"#app",

   data(){
      return {
         curso:"",
         horas:0,
         horasTotal:0,
         arrCur:[]
      }
   },

   methods:{
      setData(){
         // tambien se puede hacer con array de objetos recordar puedes mirar una solucion en el repo de una chica en github
         this.arrCur.push(`Curso ${this.curso} - horas ${this.horas}`)
         this.horasTotal = parseInt( this.horasTotal) + parseInt(this.horas)
         console.log(this.horasTotal);
      }
   }



})

