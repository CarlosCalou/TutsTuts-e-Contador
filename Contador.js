var contador = document.getElementById("numero");
var decrementar = document.getElementById("decrementar");
var zerar = document.getElementById("zerar");
var incrementar = document.getElementById("incrementar");

var numero = 0;
contador.textContent = numero;

decrementar.addEventListener("click", function () {
  numero--;
  verificar(numero);
});
zerar.addEventListener("click", function () {
  numero = 0;
  verificar(numero);
});
incrementar.addEventListener("click", function () {
  numero++;
  verificar(numero);
});

function verificar(numero) {
  contador.textContent = numero;
  if (numero > 0) {
    contador.style.color = "#09b600ff";
    return;
  } else if (numero < 0) {
    contador.style.color = "#dd0000ff";
    return;
  }

  contador.style.color = "#000";
}
