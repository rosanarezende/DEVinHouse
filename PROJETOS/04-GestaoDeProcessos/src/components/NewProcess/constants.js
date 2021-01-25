const hoje = new Date();
const ano = hoje.getFullYear();
let mes = JSON.stringify(hoje.getMonth() + 1);
if (mes < 10) {
  mes = "0" + mes;
}
let dia = hoje.getDate();
if (dia < 10) {
  dia = "0" + dia;
}

export const today = `${dia}/${mes}/${ano}`;
