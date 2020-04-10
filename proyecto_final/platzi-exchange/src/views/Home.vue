<template>
  <div>
    <!-- utilizamos uno de los template de los snippners -->
    <bounce-loader :loading="isloading" :color="'#68d391'" :size="100" />

    <!-- traemos el componente -->
    <px-assets-table v-if="!isloading" :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
// traemos el rauter para poder utilizarlo en la configuracion de exportacion del componente padre yq ue este cepa que trabajaremos con router

// importamos la api.js para traer data del endponit de coindata
import api from "@/api.js";

export default {
  name: "Home",

  data() {
    return {
      isloading: false,
      assets: []
    };
  },

  components: {
    PxAssetsTable
  },
  // utilizamos el hook de ciclo de vida de vue.js para traer la data del api coindata
  created() {
    this.isloading = true;
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isloading = false));
  }
};
</script>
