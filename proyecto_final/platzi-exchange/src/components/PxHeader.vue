<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <!-- se le agrega el componente que importamos mediante Javascript (vue) -->
          <px-icon class="mr-2"></px-icon>
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >PlatziExchange</router-link
          >
        </div>
        <div
          class="sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm flex">
            <router-link 
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                {{ l.title }}
              </router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
// importamos este componente para utilizarlo
import PxIcon from "@/components/PxIcon";

export default {
  // se le agrega un nombre de preferencia que sea el nombre del documento
  name: "PxHeader",

  props:{
    links:{
      type:Array,
      default:()=>[]
    }
  },

  // agregamos los componentes que importamos
  components: {
    PxIcon
  }
};
</script>

<style scoped></style>
