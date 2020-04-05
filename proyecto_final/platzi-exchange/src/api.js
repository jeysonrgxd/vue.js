const url = "https://api.coincap.io/v2/"

function getAssets(){
   
   return fetch(`${url}assets?limit=20`)
   .then(resp => resp.json())
   .then(resp => resp.data)
}

export default {
   getAssets
}
//si hay error se puede tener una propiedad error dentro de data(), y en el catch de la promise que hace la peticion a coincap asignas un valor o mensaje a esa propiedad errro. Luego en tu template usando un v-show o v-if eliges como mostrar el mensaje.