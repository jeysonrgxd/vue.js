Vue.component('modal', {
  props:["title"],


   template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{ title }}</h3>
          <div>
            <slot name="body"></slot>
          </div>
          <footer>
            <button v-on:click="closeModal">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`,

    methods:{
      closeModal(){
        this.$emit("close-modal")
      }
    }
})

new Vue({

   el: '#app',

   data(){
      return {
         showModal:false,
         titleModal:"Super Modal"

      }
   },

   methods:{
      toggleModal(){
        this.showModal = !this.showModal
      }
   }
})