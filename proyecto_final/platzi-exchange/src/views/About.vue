<template>
  <div class="flex-col items-center">
    <h1 class="text-gray-700 text-6xl">Platzi Exchange v1.0.0</h1>
    <p class="text-gray-600 text-xl text-center">
      Proyecto para obtener las cotizaciones de las cryptomonedas mas
      importantes a traves de la API REST de Coincap.
      <br />Este proyecto es utilizado en el curo de Vue.js Basico de Platzi
    </p>
    <!-- utilizamos un componente que nos da vue-router para navegar entre nuestras routes creadas-->
    <!-- el to es para definir a que route que configuaramos en el router.js queremos ir -->

    <router-link to="/" class="mt-5 text-xl text-green-600 hover:underline"
      >Volver a la pagina de Inicio</router-link
    >
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>
