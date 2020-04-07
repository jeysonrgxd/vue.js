// ya que emos instalado como dependecia la libreria directamente de npm Numeral.js este va en los node_modules y por ende al importarlo lo asemos de frente
import numeral from "numeral";

export const dollaFilter = function(value) {
  if (!value) {
    return "$ 0";
  }
  return numeral(value).format("($ 0.00a)");
};

export const percentFilter = function(value) {
  if (!value) {
    return "0%";
  }

  return `${Number(value).toFixed(2)}%`;
};
