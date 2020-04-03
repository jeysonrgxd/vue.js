<template>
  <main>
    <!-- kybas keys -->
    <px-header></px-header>
    <px-assets-table></px-assets-table>
  </main>
</template>

<script>
// importamos los componentes que utilizaremos
import PxHeader from "@/components/PxHeader"
import PxAssetsTable from "@/components/PxAssetsTable"

export default {
  name: "App",

  // pacas keys
  components: {
    PxHeader,
    PxAssetsTable
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
