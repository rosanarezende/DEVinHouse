// ============== 1 ==============
// Utilizando JavaScript, emita um alerta para o usuário com alguma informação importante.

// window.alert("Olá usuário!");

// ============== 3 ==============
// Faça com que o navegador do usuário pergunte o nome dele(a). Utilizando o método alert, exiba o nome inserido pelo usuário.

// var nome = window.prompt("Qual seu nome? ");
// window.alert(`Olá ${nome}!`);

// ============== 4 ==============
/* Pergunte ao usuário: 
nome (prompt), idade (prompt) e se gosta de praticar algum esporte (confirm).
Crie 3 variáveis para guardar as respostas do usuário: uma deve receber um valor textual (string), outra deve receber um valor numérico (number), e outra um valor de verdadeiro ou falso (boolean). 
Faça com que esses 3 valores sejam exibidos no console do navegador. */

// var nome = window.prompt("Qual seu nome? ");
// var idade = Number(window.prompt("Qual sua idade? (numero) "));
// var esporte = window.confirm("Gosta de praticar esporte? ");
// console.log(
//   `${nome} tem ${idade} anos e ${
//     esporte ? "" : "não"
//   } gosta de praticar esportes`
// );

// ============== 5 ==============
/*Faça 2 prompts ao usuário:
No primeiro, pergunte o seu sobrenome.
No segundo, pergunte o seu nome.
Em seguida, exiba na tela um alert contendo o nome completo do usuário, na ordem correta (ou seja: Nome Sobrenome).*/

// var sobrenome = window.prompt("Qual seu sobrenome? ");
// var nome = window.prompt("Qual seu nome? ");
// window.alert(`${nome} ${sobrenome}`);

// ============== 6 ==============
/* Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um alert contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome. */

// var ultimoSobrenome = window.prompt("Qual seu último sobrenome? ");
// window.alert(
//   `Olá, ${ultimoSobrenome.toUpperCase()}. Seu sobrenome contém ${
//     ultimoSobrenome.length
//   } letras.`
// );

// ============== 7 ==============
/* Faça 2 prompts ao usuário: 
No primeiro, pergunte o ano de nascimento. 
No segundo, pergunte o ano atual. 
Em seguida, exiba na tela um alert contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.*/

// var anoDeNascimento = Number(
//   window.prompt("Qual o ano do seu nascimento? (número)")
// );
// var anoAtual = Number(window.prompt("Qual o ano atual? (número)"));
// window.alert(
//   `Sua idade é ${anoAtual - anoDeNascimento} ou ${
//     anoAtual - anoDeNascimento - 1
//   }.`
// );
