Vue.component("hijo",{
   template: //html 
   `
      <div>
         numero del hijo {{numero}} 
         <h4>Nombre: {{nombre}}</h4>
         <button @click="sendName">Mandar nombre</button>
      </div>
   `,
   props:["numero"],
   data(){
      return{
         nombre:'jeyson',
         edad : 25 
      }
   },
   methods: {
      sendName(){
         this.$emit('sendname',this.nombre)
      }
   },
   mounted() {
      this.$emit('sendHobbi','programacion')
      this.$emit('sendold',this.edad)
   },
})