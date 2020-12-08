function validaCampos() {
  const myAlert = document.querySelector("#my-alert");
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

function calcula(tipo) {
  document.querySelector("#result").innerHTML = "";

  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  if ([num1, num2].some((element) => element === "")) {
    validaCampos();
  } else {
    num1 = Number(num1);
    num2 = Number(num2);

    let resultado = [num1];
    let a = num1;
    for (i = 1; i < 10; i++) {
      let newNum;
      switch (tipo) {
        case "PA":
          newNum = a + num2;
          break;
        case "PG":
          newNum = a * num2;
          break;
        default:
          break;
      }
      resultado.push(newNum);
      a = newNum;
    }

    if (resultado) {
      document.querySelector("#result").innerHTML = resultado.toString();

      setTimeout(() => {
        document.querySelector("#num1").value = "";
        document.querySelector("#num2").value = "";
      }, 2000);
    }
  }
}
