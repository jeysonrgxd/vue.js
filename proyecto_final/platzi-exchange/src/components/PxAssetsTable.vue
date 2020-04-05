<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <!-- hacemos un v-for para llenar el contenido de la table de acuerdo a la variable assets que el componente home no da y que lo obtenemos con el props d ela configuracion de este componente -->
      <tr class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      v-for="a in assets"
      :key="a.id"
      >
        <td>
          <img :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`" :alt="a.name"
          >
        </td>
        <td>
          # {{ a.rank }}
        </td>
        <td>
          {{ a.name }}
        </td>
        <td>
          {{ a.priceUsd }}  
        </td>
        <td>
          {{ a.marketCapUsd }}
        </td>
        <td>{{ a.changePercent24Hr }}</td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>


export default {
   name:"PxAssetsTable",
   
   // definimos un propiedad en este caso assets para recivir registro que nos mande la api por medio del componente padre
   props:{
      assets:{
         type:Array,
         // para objeto o array debemos definir una funcion que devuelva objeto o array
         // si es otro dato como string boolean ponerlo sin una funcion solo : "string", :boolean
         default: () => [] 
      }
   }
}
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
img{
  height: 64px;
}

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