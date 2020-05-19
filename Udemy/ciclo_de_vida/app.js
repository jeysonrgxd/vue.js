const myapp = new Vue({
   el:"#app",
   
   data(){
      return{
         saludo:"Hola como estas"
      }
   },

   beforeCreate() {
      // esto es antes que carge el componente
      console.log("beforeCreate");
   },
   
   created(){
      // ya se creo todas las opciones del componente y por lo tanto ya existe la seccion data y los metodos, pero aqui todavia vue no a cargado la vista no la ha renderizado osea no se puede acceder a 'el'
      //mayormente usada para llamadas de api rest y inicializar variables de vue
      console.log("Created");
   },

   beforeMount() {
      // antes que se agan los cambios en el html
      console.log("beforeMounted");
   },

   mounted(){
      // aqui ya se pinto la vista osea ya se renderizo el DOM
      console.log("Mounted");
   },

   beforeUpdate(){
      //antes de que se actualize 
      console.log('beforeUpdate');
   },

   updated(){
      //al realizar los cambios
      console.log('update');
   },

   beforeDestroy(){
      //Antes de destruir la instancia
      console.log('beforeDestroy');
   },

   destroyed(){
      // Se destruyo toda la instancia :(
      console.log('destroyed');
   },

   methods:{
      destruir() {
         this.$destroy()
      }
   }
   

})