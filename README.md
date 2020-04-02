## CURSO DE VUE.JS

 - Casi cualquier tipo de código JS puede ser utilizado dentro de una expresión ( lo que va en el html {{ valor o codigo }} ). Hay cosas que no podríamos hacer: un if, un else, un while, un switch, un for…

 - Las directivas es la herramienta que nos ofrece Vue para poder manipular el DOM y para poder manipularlo de forma declarativa. Es decir, que podemos utilizar diferentes tags dentro de nuestros elementos HTML. Las directivas de Vue siempre se escriben con v corta, guión y el nombre de la directiva. Ejemplo: v-bind:src=“img” v-bind:alt="name" Así podemos definir valores dinámicos para estos atributos.

 - directivas v-if, v-show. La principal diferencia entre v-if y v-show es que v-if renderiza el elemento en el DOM solo si se cumple la expresión y v-show renderiza todos los elementos en el DOM y luego utiliza la propiedad display de CSS para ocultarlo si no cumple con la expresión. v-show se utiliza preferentemente si el elemento cambia frecuentemente y v-if cuando no cambia a lo largo del tiempo

 - la directiva v-for como su nombre lo indica es una directiva q nos permite iterar arreglos simples y arreglos de objetos.

 ### v-bind:
   Con esta directiva podremos vincular un atributo html (o prop de un componente) a un valor que tenemos en nuestro modelo. Recibe como parámetro el atributo. De esta manera podríamos, por ejemplo, asignar el atributo disabled condicionalmente a un botón.

 ### Eventos

 - #### methods :
    propiedad de tipo Objeto de la instancia de Vue donde se puede definir funciones, que se pueden utilizar en diferentes contexto, principalmente para atacharse a eventos que pueden ser disparados por la vista.
    
 - #### v-on : 
   directiva que sirve para escuchar eventos del DOM, tales como onclick, onmouseover, mouseout, entre otros, para ejecutar alguna función.

### Clases y stylos en tiempo real

- ### v-bind:class:
   podemos modificar dinamica mente el valor de la propiedad class de una elemento html a travez de la directiva v-bind:class="......" en el podemos poner validaciones como operadores ternarios o objetos clave valor donde la clave es la clase que se le asignara si el valor se cumple (clave = clase, valor = condicion)

- ### v-bind:style:
   podemos tambien definir estylos dinamicos que cambien en tiempo real por la interaccion de algun elemento o usuario


### Computed Properties y Watchers

- ### Propiedades computadas (Computed):
   propiedades que se calculan en tiempo real en base a los valores de otras propiedades.

- ### Watcher:
   Tienen que tener cada funcion el mismo nombre de la variable al cual se verificara algun cambio, son Funciones que ejecutan un código es decir que por medio de un cambio de la observación de una variable se puede disparar determinado código o ejecutar una función. (Podemos pensarlo como un Disparador de código.)

### Two-way data binding
   (enlace de datos bidireccional)

- ### v-model:
   permite que cada vez que cambio la vista atravez con interacciones con el usuario e refresque el codigo y cada vez que se refresque el codigo tambien se actualize la vista, (esta caracteristica de vue nos permite en palabras cortas manipular la informacion que es ingresada por el usuario)

   ejemplo: linkear las cosas que escribe el usuario en un input de un formulario con las propiedades que tenemos definidas en data.


### Sistema de componente
   mas que todo no ayuda a tener prociones de codigo o componentes para poder utilizarlo donde queramos y asi lograr la reutilizacion y pensar en componentes

- ### Vue.compornent:
   tiene casi los mismos metodos que la instancia de Vue donde veniamos haciendo todo, nada mas que este tiene el metodo template donde va a ir el “html” de nuestro componente 

- ### Comunicación entre componentes: propiedades
   cuando creamos la instacia de vue, el contenedor al que vue se basara osea el div con id="app" este tendra dentro un componente que devemos crear, y el cual recivira las propiedades del padre osea de la instacia de vue, para que con esto podamos obtener las variables y agregarlo a nuestro template para usarlo como un componente 

- ### Comunicacion de componente hijo al padre
   para que un componente hijo intractue con el padre asiendo o pidiendo que ejecute alguna funcion del padre el componente hijo se tiene que comunicar mediante eventos que se ejecutan mediante una interaccion del componente hijo, se utiliza this.$emit('evento-name',valor) esto en el la funcion que se ejecuta a la interracion, y en html devemos utilizar un v-on:evento-name="funcion del padre"
   en "funcion del padre" tenemos que tener creado en el padre la funcion a ejecutar en methods

- ### Slots
   Api de distribución de contenido, que permite que un componente padre inyecte html a un componente hijo.

- ### Ciclo de vida y Hooks
   Vue tiene diferentes estados y esto nos permite usar ciertas acciones antes y después de cada estado.
   A estas acciones se las conoce como hooks y tienen unos propósitos claros:

- Nos permite conocer como se crea, actualiza y se destruye un componente.

- Podemos saber en que punto se encuentra el componente y poder actuar en consecuencia.

   A continuación vamos a ver los hooks que nos ofrece Vue: beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed


 ### VS Code + Vetur / Chrome / Firefox + DevTools

   estos son erramientas de desarrollo que nos ayudaran para el desarrollo de nuestras aplicaciones con vue, los siguientes son enlaces para descargar lo indicado en el curso:

- Link para descarga node [Download Node.js](https://nodejs.org/es/)   
- Link para descarga VSCode [Download VSCode](https://code.visualstudio.com/)   
- Extencion de VSCode Vetur [EXT: Vetur](https://github.com/vuejs/vetur)   
- Extencion de VSCode ESLint [EXT: ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)   
- Extencion de VSCode Prettier [EXT: Prettier](https://prettier.io/)   
- Chrome DevTools [Extencion Google](https://github.com/vuejs/vue-devtools)


### VUE CLI

   La “interfaz de línea de comandos Vue” VUE CLI es una herramienta creada por el equipo Vue.js para ayudar a facilitar el rápido desarrollo de las aplicaciones Vue.

   [Vue Cli](https://cli.vuejs.org/)

   Si bien puede usar Vue.js en el navegador directamente, la mayoría de las aplicaciones frontales usan Node.js para las herramientas de compilación.

   ## Funcionalidades, UI y comandos básicos

- comando basico de creacion de entorno de desarrollo con vue : ``` vue create name_project ```

- Los preset: A medida que se van creando proyectos con determinada configuración, el cli de vue permite guardar esa configuración para más adelante poder utilizarla al momento de crear un proyecto.

- Detectar errores de linteo : ``` npm run lint ```

- Generar la aplicación en modo producción. Genera una carpeta dist : ``` npm run build ```

- Permite generar un servidor web local: : ``` npm i -g serve ```

- una vez instalado el serve este comando levanta un localhost del dist ``` serve -s dist ```

- Genera una aplicación web local, que mediante una interfaz de usuario permite gestionar los proyectos de Vue:  ``` vue ui ```
