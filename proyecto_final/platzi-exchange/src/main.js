// importamos la libreria de una dependecia de npm
import Vue from "vue";
import App from "./App.vue";

// importamos el archivo css de tailwind
// el @ siempre especifica al src del proyecto
import "@/assets/css/tailwind.css"

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
