<template>
  <!-- ese @click hace referencia a v-on:click "es un shortcode"-->
  <button
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white p-2 border border-green-500 hover:border-transparent rounded"
    @click="buttonclick"
  >
    <beat-loader :loading="isloading" :color="'#68d391'" :size="8" />
    <!-- podemos usar tambien un contenedor para el slot y usar el v-show ya que v-show no es compatible para slot en cambio el v-if si lo es -->
      <slot v-if="!isloading"></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",
  props: {
    isloading: {
      type: Boolean,
      default: false
    }
  },

  // declaramos el metodo click el cual enviare un aviso al padre que ejecute si metodo click para que en este caso el padre que va contener este componente sepa que hacer al presionar click en el boton del componente hijo
  methods: {
    buttonclick() {
      // con eso ya sabemos que hacemos referencia que se ejecute un metodo del padre con el mismo nombre que le mandamos
      this.$emit("custom-click");
    }
  }
};
</script>
