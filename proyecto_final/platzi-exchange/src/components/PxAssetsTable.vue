<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrden === 1, down: this.sortOrden === -1 }">
          <span class="underline cursor-pointer" @click="changeSortOrder"
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input type="text" placeholder="Buscar..." v-model="filter" />
        </td>
      </tr>
    </thead>
    <tbody>
      <!-- hacemos un v-for para llenar el contenido de la table de acuerdo a la variable assets que el componente home no da y que lo obtenemos con el props d ela configuracion de este componente -->

      <!-- reemplazaremo el el bucle de `a in assets ` por ` a in filteredAssets ` para poder interactuar con un computado atravez del input del buscado -->
      <tr
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        v-for="a in filteredAssets"
        :key="a.id"
      >
        <td>
          <img
            class="w-8 h-8"
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
          />
        </td>
        <td># {{ a.rank }}</td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          >
            {{ a.name }}
          </router-link>
          <small class="ml-1 text-gray-500">
            {{ a.symbol }}
          </small>
        </td>
        <td>
          {{ a.priceUsd | dollar }}
        </td>
        <td>
          {{ a.marketCapUsd }}
        </td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ a.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <px-button @custom-click="goToCoin(a.id)">
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "@/components/PxButton";
export default {
  name: "PxAssetsTable",
  components: {
    PxButton
  },

  data() {
    return {
      filter: "",
      sortOrden: 1
    };
  },

  computed: {
    filteredAssets() {
      // comentamos este codigo por que ya no se utilizara por que usaremos ordenes

      // if(!this.filter){
      //   return this.assets
      // }

      const lastOrden = this.sortOrden === 1 ? -1 : 1;
      // recordar no poner corchetes y si lo asemos tenemos que return
      return this.assets
        .filter(
          a =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseFloat(a.link) > parseFloat(b.link)) {
            return this.sortOrden;
          }
          return lastOrden;
        });
    }
  },

  // definimos un propiedad en este caso assets para recivir registro que nos mande la api por medio del componente padre
  props: {
    assets: {
      type: Array,
      // para objeto o array debemos definir una funcion que devuelva objeto o array
      // si es otro dato como string boolean ponerlo sin una funcion solo : "string", :boolean
      default: () => []
    }
  },

  methods: {
    goToCoin(id) {
      // no es lo mismo que this.route, this.rauter me permite acceder a la instacia del rauter
      //para poder utilizarlo principalmente para navegar atravez de codigo

      // lo asemos atraves de push seteando la ruta y pasandole el parametro que nesesita la ruta
      this.$router.push({ name: "coin-detail", params: { id: id } });
    },

    changeSortOrder() {
      this.sortOrden = this.sortOrden === 1 ? -1 : 1;
    }
  }
};
</script>

<style scope>
/* el scope hace que los stylos se aplique solo a este componente */

.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}
/* para agregar la imagen del dragon */
/* img{
  height: 64px;
} */

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
