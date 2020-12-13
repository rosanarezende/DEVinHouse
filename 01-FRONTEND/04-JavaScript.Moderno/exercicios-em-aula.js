// ==========================================
// ======== DECLARAÇÕES DE VARIÁVEIS ========
// ==========================================

// 1 - Utilizando var crie uma função que recebe um array de números, declare uma variável atribuindo um número a ela e itere o array recebido ,atribuindo a soma dos números a uma variável criada dentro do Loop. Após a iteração some esses números a primeira variável e imprima o resultado utilizando console.log.

function somaUltimos2NumerosComVar(listaDeNumeros) {
  var origem = 0;
  for (var i = 0; i < listaDeNumeros.length; i++) {
    if (i < listaDeNumeros.length - 1) {
      var soma = listaDeNumeros[i] + listaDeNumeros[i + 1];
    }
  }
  var resultado = origem + soma;
  console.log(resultado);
}
somaUltimos2NumerosComVar([1, 2, 3, 4, 5]);

// 2 - Reescreva a função do Exercício 1 substituindo var por let e compare os resultados.

// function somaUltimos2NumerosComLet(listaDeNumeros) {
//   let origem = 0;
//   for (let i = 0; i < listaDeNumeros.length; i++) {
//     if (i < listaDeNumeros.length - 1) {
//       let soma = listaDeNumeros[i] + listaDeNumeros[i + 1];
//     }
//   }
//   let resultado = origem + soma;
//   console.log(resultado);
// }
// somaUltimos2NumerosComLet([1, 2, 3, 4, 5]);

// =======================================
// =========== SPREAD OPERATOR ===========
// =======================================

// Considerando um objeto funcionário com as propriedades nome, idade, cargo e salário, crie uma função que receba um objeto "clonando" o funcionário recebido, alterando o nome e a idade.

function alteraNomeEIdade(funcionario, novoNome, novaIdade) {
  return {
    ...funcionario,
    nome: novoNome,
    idade: novaIdade,
  };
}

const funcionario1 = {
  nome: "Rosana",
  idade: 33,
  cargo: "desenvolvedora de software",
  salario: 4433,
};

const funcionario2 = alteraNomeEIdade(funcionario1, "Cleiton", 32); //?

// ======================================
// =========== REST OPERATOR ===========
// ======================================

// Crie uma função de cálculo de valores, em que o primeiro parâmetro será a operação a ser realizada (soma ou multiplicação) e o restante dos parâmetros serão os números que serão calculados entre si conforme a operação recebida e imprima o resultado.

function calcular(operacao, ...numeros) {
  let resultado = operacao === "multiplicacao" ? 1 : 0;
  for (let numero of numeros) {
    if (operacao === "multiplicacao") {
      resultado *= numero;
    } else if (operacao === "soma") {
      resultado += numero;
    }
  }
  return resultado;
}

calcular("multiplicacao", 1, 2, 3, 4, 5); //?

// ======================================
// =========== DESTRUCTURING ===========
// ======================================

/*
Objeto Funcionário {
  nome:
  idade:
  cargo:
  salario:
}

Crie uma função que receba um objeto funcionário com as propriedades descritas acima e separe em variáveis o nome, o cargo e o salário, imprimindo no console os valores extraídos.
*/

const separaPropriedades = (funcionario) => {
  const { nome, idade, cargo, salario } = funcionario;
  console.log(`As propriedades do funcionário são:
- nome: ${nome}
- idade: ${idade}
- cargo: ${cargo}
- salário: ${salario}`);
};

// const funcionario1 = {
//   nome: "Rosana",
//   idade: 33,
//   cargo: "desenvolvedora de software",
//   salario: "R$ 4.300,00",
// };

// separaPropriedades(funcionario1);

// =======================================
// =========== TEMPLATE STRING ===========
// =======================================

/*
Crie uma função que receba um objeto funcionário (o mesmo do exercício de Destructuring) e imprima na seguinte formatação:

<nome> atua no cargo de <cargo> e recebe um salário de <salario>
*/

const imprimeFuncionario = (funcionario) => {
  const { nome, idade, cargo, salario } = funcionario;
  console.log(
    `${nome} atua no cargo de ${cargo} e recebe um salário de ${salario}`
  );
};
imprimeFuncionario(funcionario1);

// =======================================
// =========== REDUCE ===========
// =======================================

/*
Despesa {
  descricao: ,
  valor: ,
}
Crie uma função que receba uma lista de despesas e retorne somente os valores gastos
*/

const calculaGastos = (listaDeDespesas) =>
  listaDeDespesas.reduce((prev, acc) => prev + acc.valor, 0);

const despesasCasa = [
  { descricao: "energia elétrica", valor: 350 },
  { descricao: "água", valor: 126 },
  { descricao: "internet", valor: 120 },
  { descricao: "celular", valor: 150 },
];

calculaGastos(despesasCasa); //?

/*
Crie uma função que receba uma lista de valores gastos e utilizando a função reduce calcule e retorne o total gasto.
  - teste a função utilizando o resultado obtido com o exercício anterior
*/

const despesasAlice = [
  { descricao: "curso de informática", valor: 130 },
  { descricao: "curso de robótica", valor: 170 },
  { descricao: "balé", valor: 80 },
  { descricao: "aulas de reforço", valor: 150 },
];

const calculaTotalGasto = (listadeGastos) => {
  return listadeGastos.reduce((prev, acc) => prev + calculaGastos(acc), 0);
};

calculaTotalGasto([despesasCasa, despesasAlice]); //?

// =======================================
// =========== SOME ===========
// =======================================

/*
Considere a seguinte entidade:
professor = {
  nome: ,
  idade: ,
  disciplina: ,
  tempoCasa:
}

Crie uma função que receba uma lista de professores, filtre todos os que ministram a disciplina "Programação Web", depois verifique se algum destes possui mais de 30 anos de tempo de casa e retorne o resultado da verificação.
*/

const varificaSeHaProfessoresDeProgromacaoComMaisDe30AnosDeCasa = (
  listaDeProfessores
) =>
  listaDeProfessores
    .filter((prof) => prof.disciplina === "Programação Web")
    .some((prof) => prof.tempoCasa > 30);

const professores = [
  { nome: "Fulana", idade: 30, disciplina: "Programação Web", tempoCasa: 3 },
  { nome: "Beltrana", idade: 50, disciplina: "Matemática", tempoCasa: 30 },
  { nome: "Cicrana", idade: 55, disciplina: "Programação Web", tempoCasa: 32 },
  { nome: "Joana", idade: 35, disciplina: "Física", tempoCasa: 10 },
];

varificaSeHaProfessoresDeProgromacaoComMaisDe30AnosDeCasa(professores); //?
