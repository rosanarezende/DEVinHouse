function calculaIdade(event) {
  event.preventDefault();

  var input = document.querySelector("#inputDate").value;
  input = input.replace(/-/g, "/");
  var aniversario = new Date(input);

  var hoje = new Date();

  var idade = hoje.getFullYear() - aniversario.getFullYear();
  if (
    hoje.getMonth() < aniversario.getMonth() ||
    (hoje.getMonth() === aniversario.getMonth() &&
      hoje.getDate() < aniversario.getDate())
  ) {
    console.log("entrou");
    idade -= 1;
  }

  var resultado = document.querySelector("#resultado");
  resultado.innerHTML = `${idade} ano${idade > 1 ? "s" : ""}`;
}
