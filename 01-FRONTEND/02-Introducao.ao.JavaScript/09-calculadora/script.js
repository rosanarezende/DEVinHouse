let myAlert = document.querySelector("#my-alert");

function validaCampos(campos) {
  const vazio = campos.some((element) => element === "");
  if (vazio) {
    const conteudo = document.createTextNode(
      "Preencha os campos para prosseguir!"
    );
    myAlert.appendChild(conteudo);
    myAlert.style.display = "block";
    setTimeout(() => {
      myAlert.style.display = "none";
      myAlert.removeChild(conteudo);
    }, 3000);
    return;
  }
}

function operacao(tipo) {
  document.querySelector("#result").value = "";
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  validaCampos([num1, num2]);

  num1 = Number(num1);
  num2 = Number(num2);

  let resultado;
  switch (tipo) {
    case "soma":
      resultado = num1 + num2;
      break;
    case "subtracao":
      resultado = num1 - num2;
      break;
    case "multiplicacao":
      resultado = num1 * num2;
      break;
    case "divisao":
      resultado = num1 / num2;
      break;
    default:
      resultado = undefined;
      break;
  }

  if (resultado) {
    document.querySelector("#result").value = resultado;
    setTimeout(() => {
      document.querySelector("#num1").value = "";
      document.querySelector("#num2").value = "";
    }, 2000);
  }
}
