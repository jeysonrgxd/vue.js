// importamos la libreria de una dependecia de npm
import Vue from "vue";
import App from "./App.vue";

// importamos el archivo css de tailwind
// el @ siempre especifica al src del proyecto
import "@/assets/css/tailwind.css";

// traemos el rauter creado para agregarlo a la instacia de Vue la que es la que maneja todo
import router from "@/router";

// importamos los filtros que tendra la vista
import { dollaFilter, percentFilter } from "@/filters.js";

// importamos libreria de terceros
import Chart from "chart.js";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

// utilizamos el metodo filter de vue
Vue.filter("dollar", dollaFilter);
Vue.filter("percent", percentFilter);

// le decimmos al vue que use la libreria de terceros
Vue.use(Chartick.use(Chart));
Vue.use(VueSpinners);

Vue.config.productionTip = false;

new Vue({
  // como su propiedad es igual que el nombre de la importacion usamos ecmascript6
  router,
  render: h => h(App)
}).$mount("#app");
