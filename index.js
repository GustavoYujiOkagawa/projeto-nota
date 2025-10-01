// Seleciona os botões
const btnBaixar = document.querySelector(".Button-primary");
const btnDemo = document.querySelector(".Button-secondary");

// Evento: clicar em "Baixar Agora"
if (btnBaixar) {
  btnBaixar.addEventListener("click", () => {
    alert("🚀 O download será disponibilizado em breve!");
  });
}

// Evento: clicar em "Ver Demonstração"
if (btnDemo) {
  btnDemo.addEventListener("click", () => {
    alert("🎥 A demonstração será adicionada em breve!");
  });
}
