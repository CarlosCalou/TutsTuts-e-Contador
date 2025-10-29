var corpo = document.getElementById("corpo");
var botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  var cor = window.getComputedStyle(corpo).backgroundColor;

  if (cor === "rgb(0, 0, 0)") {
    corpo.style.backgroundColor = "#FFF";
    botao.style.backgroundColor = "#000";
    botao.style.color = "#FFF";
    return;
  }

  corpo.style.backgroundColor = "#000";
  botao.style.backgroundColor = "#FFF";
  botao.style.color = "#000";
});
