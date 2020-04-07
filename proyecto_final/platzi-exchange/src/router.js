import Vue from "vue";
import Router from "vue-router";

// importamos lo componentes que variaran mediante las rutas
import Home from "@/views/Home";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";
import error from "@/views/Error";

// funcion que nos permite instalar plugin o incorporar plugin, es use lo que nos permite ir agregando nuevs cosas que nesesitemos y de ahi viene el framework progresivo
Vue.use(Router);

//esportamos y definimos la configurcion de nuestra rutas creando una instacion de Router que recive un objeto con la configuracion el cual la daremos
export default new Router({
  // modo hintory de html
  mode: "history",
  // la propiedad routes es un array de objetos de configuracion de rutas con componentes
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    },
    {
      path: "*",
      name: "error",
      component: error
    }
  ]
});
