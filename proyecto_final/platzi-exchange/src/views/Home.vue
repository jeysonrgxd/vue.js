<template>
   <div>
      <!-- traemos el comonente -->
      <px-assets-table></px-assets-table>
   </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable"
// traemos el rauter para poder utilizarlo en la configuracion de exportacion del componente padre yq ue este cepa que trabajaremos con router


export default {
   name:'Home',

   components:{
      PxAssetsTable
   }
};
</script>