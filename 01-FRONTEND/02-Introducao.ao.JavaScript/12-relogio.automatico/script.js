const result = document.querySelector("#result");

function adicionaZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function showTime() {
  let agora = new Date();
  let h = adicionaZero(agora.getHours());
  let m = adicionaZero(agora.getMinutes());
  let s = adicionaZero(agora.getSeconds());
  result.innerHTML = h + ":" + m + ":" + s;
  setTimeout(showTime, 1000);
}
showTime();
