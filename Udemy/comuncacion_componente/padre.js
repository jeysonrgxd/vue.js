Vue.component('padre',{

   template: //html 
      ` 
         <div class="">
            <h2>Componente Padre {{numeroPadre}}</h2>
            <p>El nombre de mi hijo es: {{nombreHijo}}</p>
            <p>la edad de mi hijo es: {{edadHijo}}</p>
            <p>El hobbie de mi hijo es: {{hobbiHijo}}</p>
            <button @click="numeroPadre++">Aumenta</button>
            <hijo :numero="numeroPadre" @sendname="sendname" 
                  @sendold="getOld($event)" @sendHobbi="hobbiHijo = $event"></hijo>  
         </div>

      `,
   
   data(){
      return{
         nombreHijo:"",
         numeroPadre : 0,
         edadHijo:0,
         hobbiHijo:""
      }
   },
   methods: {
      sendname(data){
         this.nombreHijo = data
      },
      getOld(edad){
         this.edadHijo = edad
      }
   },   

   
})