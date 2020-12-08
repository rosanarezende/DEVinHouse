let myAlert = document.querySelector("#my-alert");

function validaCampo(campo) {
  if (campo === "") {
    const conteudo = document.createTextNode(
      "Preencha os campos para prosseguir!"
    );
    myAlert.appendChild(conteudo);
    myAlert.style.display = "block";
    setTimeout(() => {
      myAlert.style.display = "none";
      myAlert.removeChild(conteudo);
    }, 3000);
  }
}

function verificar() {
  let num = document.querySelector("#num").value;
  validaCampo(num);

  if (num != "") {
    let result = document.querySelector("#result");
    num = Number(num);
    let resultado;
    if (num % 2 === 0) {
      resultado = `O número ${num} é par!`;
    } else {
      resultado = `O número ${num} não é par!`;
    }

    const conteudo = document.createTextNode(resultado);
    result.appendChild(conteudo);

    setTimeout(() => {
      document.querySelector("#num").value = "";
      result.removeChild(conteudo);
    }, 2000);
  }
}
