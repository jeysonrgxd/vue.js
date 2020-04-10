const url = "https://api.coincap.io/v2/";

function getAssets() {
  return fetch(`${url}assets?limit=20`)
    .then(resp => resp.json())
    .then(resp => resp.data);
}

function getAsset(coin) {
  return fetch(`${url}assets/${coin}`)
    .then(resp => resp.json())
    .then(resp => resp.data);
}

function getAssetHistory(coin) {
  let now = new Date();
  // obtenemos el tiempo en numero de cuanto equivale desde el 1970
  let end = now.getTime();

  //seteamos a now un dia anterior para que cambie el valor total de la instancia que es now
  now.setDate(now.getDate() - 1);

  // una vez que now ya es el dia de ayer y ni hoy por la seteada que le dimos accedemos a su tiempo en numero de cuanto equivale desde el 1970
  let start = now.getTime();

  return fetch(
    `${url}assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(resp => resp.json())
    .then(resp => resp.data);
}

function getMarkets(coin) {
  return fetch(`${url}assets/${coin}/markets?limit=5`)
    .then(resp => resp.json())
    .then(resp => resp.data);
}

function getExchange(id) {
  return fetch(`${url}exchanges/${id}`)
    .then(resp => resp.json())
    .then(resp => resp.data);
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
};
//si hay error se puede tener una propiedad error dentro de data(), y en el catch de la promise que hace la peticion a coincap asignas un valor o mensaje a esa propiedad errro. Luego en tu template usando un v-show o v-if eliges como mostrar el mensaje.
