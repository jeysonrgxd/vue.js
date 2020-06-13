<template>
  <div id="app" class="container">
    <cabecera></cabecera>
    <lista></lista>
  </div>
</template>

<script>
import cabecera from '@/components/Cabecera.vue'
import lista from '@/components/lista.vue'

export default {
  name: 'App',
  components: {
    cabecera,
    lista
  }
}
</script>


<style>
/* sino tiene scope esto sera global, ya que si tuviera scope solo sera estos stylos para este template */
</style>
