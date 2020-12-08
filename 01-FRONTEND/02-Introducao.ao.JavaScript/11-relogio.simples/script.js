const result = document.querySelector("#result");

function adicionaZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const agora = new Date();
const h = adicionaZero(agora.getHours());
const m = adicionaZero(agora.getMinutes());

result.innerHTML = h + ":" + m;
