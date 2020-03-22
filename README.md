### CURSO DE VUE.JS

 - Casi cualquier tipo de código JS puede ser utilizado dentro de una expresión ( lo que va en el html {{ valor o codigo }} ). Hay cosas que no podríamos hacer: un if, un else, un while, un switch, un for…

 - Las directivas es la herramienta que nos ofrece Vue para poder manipular el DOM y para poder manipularlo de forma declarativa. Es decir, que podemos utilizar diferentes tags dentro de nuestros elementos HTML. Las directivas de Vue siempre se escriben con v corta, guión y el nombre de la directiva. Ejemplo: v-bind:src=“img” v-bind:alt="name" Así podemos definir valores dinámicos para estos atributos.

 - directivas v-if, v-show. La principal diferencia entre v-if y v-show es que v-if renderiza el elemento en el DOM solo si se cumple la expresión y v-show renderiza todos los elementos en el DOM y luego utiliza la propiedad display de CSS para ocultarlo si no cumple con la expresión. v-show se utiliza preferentemente si el elemento cambia frecuentemente y v-if cuando no cambia a lo largo del tiempo

 - la directiva v-for como su nombre lo indica es una directiva q nos permite iterar arreglos simples y arreglos de objetos.