// recordar que primero tene mos que crear el componente que utilizaremos ya que dicho componente lo estamos utilizando dentro del div con id ="app" el cual es el que vue utilizara por eso debemos crear primero el componente que utilizaremos

Vue.component("counter", {
   data() {
      return {
         counter: 0
      }
   },
   methods: {
      increment() {
         this.counter += 1
         console.log(this.counter);
      }

   },
   // cuando nosotros utilizamos los templates tiene que estar contenido osea en un <div></div>
   template: //html 
      `
         <div>
            <button v-on:click="increment"> click me! </button>
            <span>{{ counter }}</span>
         </div>
      `
})
