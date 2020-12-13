/* =====================================================================
1 - Cálculo de Média de Notas

Crie uma função que receba como parâmetro uma lista de notas e calcule a média dessas notas imprimindo o resultado.
*/
function calculaMedia(listaDeNotas) {
  const soma = listaDeNotas.reduce((acc, cur) => acc + cur, 0);
  return soma / listaDeNotas.length;
}
calculaMedia([1, 2, 3, 4]); //?

/* =====================================================================
2 - Quadrado de valores

Crie uma função que receba um uma lista de números e imprima o quadrado de cada número.
*/
function calculaQuadrado(listaDeNumeros) {
  return listaDeNumeros.map((n) => n ** 2).join(", ");
}
calculaQuadrado([1, 2, 3, 4]); //?

// ************************************
// ************************************
// ************************************
pessoa1 = {
  nome: "Rosana",
  idade: 33,
  telefone: "27 99967-2118",
  profissao: "Desenvolvedora de Software",
};

pessoa2 = {
  nome: "Cleiton",
  idade: 33,
  telefone: "27 99531-2828",
  profissao: "Desenvolvedora de Software",
};

pessoa3 = {
  nome: "Alice",
  idade: 06,
  telefone: null,
  profissao: "Estudante",
};

pessoa4 = {
  nome: "Artur",
  idade: 15,
  telefone: "27 99999-9999",
  profissao: "Estudante",
};

pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];

/* =====================================================================
3 - Verificação de Maioridade de Pessoas

Considerando uma entidade Pessoa que contém os atributos nome, idade, telefone e profissão, crie uma função que receba uma lista de pessoas e descubra se alguma das pessoas da lista é maior de idade (18 anos) retornando o resultado.

*/
function verificaMaioridade(listaDePessoas) {
  const maioresDeIdade = listaDePessoas.some((pessoa) => pessoa.idade > 18);
  if (maioresDeIdade) {
    console.log("Há pessoas maiores de idade nessa lista!");
  } else {
    console.log("Não há pessoas maiores de idade nessa lista!");
  }
}

/* =====================================================================
4 - Verificação de Profissão

Considerando a mesma entidade Pessoa do exercício 3, crie uma função que receba uma lista de pessoas e descubra se todas as pessoas da lista possuem a profissão “Programador” retornando o resultado.
*/
function verificaProfissao(listaDePessoas) {
  const programadores = listaDePessoas.every(
    (pessoa) => pessoa.profissao.toLowerCase() === "programador"
  );
  if (programadores) {
    console.log("Todas as pessoas da lista são programadoras!");
  } else {
    console.log("Nem todas as pessoas da lista são programadoras!");
  }
}

/* =====================================================================
5 - Listar o nome das pessoas

Novamente considerando a entidade Pessoa do exercício 3, crie uma função que receba uma lista de pessoas e retorne uma lista com os nomes das pessoas.
*/

function listaNomes(listaDePessoas) {
  return listaDePessoas.map((pessoa) => pessoa.nome);
}
listaNomes(pessoas); //?

/* =====================================================================
6 - Encontrar as pessoas menores de 18 anos

Novamente considerando a entidade Pessoa do exercício 3, crie uma função que receba uma lista de pessoas e retorne uma nova lista contendo apenas as pessoas com idade menor que 18 anos.
*/
function listaMenoresDeIdade(listaDePessoas) {
  return listaDePessoas.filter((pessoa) => pessoa.idade < 18);
}
listaMenoresDeIdade(pessoas); //?

/* =====================================================================
7 - Encontrar uma pessoa de maior

Novamente considerando a entidade Pessoa do exercício 3, crie uma função que receba uma lista de pessoas e retorne a primeira pessoa com idade maior que 18 anos.
*/
function encontraUmMaiorDeIdade(listaDePessoas) {
  return listaDePessoas.find((pessoa) => pessoa.idade > 18);
}
encontraUmMaiorDeIdade(pessoas); //?

/* =====================================================================
8 - Multiplicação de Valores da Lista

Crie uma função que receba uma lista de valores numéricos, e utilizando a função reduce imprima a multiplicação dos valores da lista.
*/
function multiplicaValoresDaLista(listaDeNumeros) {
  const resultado = listaDeNumeros.reduce((acc, cur) => acc * cur, 1);
  console.log(resultado);
}
multiplicaValoresDaLista([1, 2, 3, 4]); //?

/* =====================================================================
9 - Apresentação de usuário

Declare uma arrowFunction que deverá possuir dois parâmetros (nome, idade). A nossa função deve mostrar no console a seguinte frase: “Olá, eu sou <nome>, e tenho <idade> anos”.
*/
const apresentaUsuario = (nome, idade) => {
  console.log(`Olá, eu sou ${nome}, e tenho ${idade} anos.`);
};
apresentaUsuario("Rosana", 33);

/* =====================================================================
10 - Soma com resultado Par

Crie uma função que retornará uma promise, ela receberá dois valores numéricos como parâmetro, a função deve somar os dois valores e somente resolver a promise caso o resultado seja par retornando o valor da soma e rejeitando a promise caso ímpar, retornando uma mensagem explicativa
*/


function resultadoDaSomaPar(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((num1 + num2) % 2 === 0) {
        resolve(num1 + num2);
      } else {
        reject("O resultado da soma não é par");
      }
    }, 2000);
  });
}

// Usando .then
resultadoDaSomaPar(2, 2)
  .then((resultado) => console.log(resultado))
  .catch((mensagem) => console.log(mensagem));

// Usando async/await
async () => {
  try {
    const resultado = await resultadoDaSomaPar(2,2)
    console.log(resultado)
  } catch (mensagem) {
    console.log(mensagem)
  }
}

/* =====================================================================
11 - Cálculo de área de um Retângulo

Crie uma arrowFunction que receba um objeto contendo altura e largura de um retângulo e retorne a área do retângulo.
*/
const calculaAreaDeRetangulo = (obj) => {
  return obj.altura * obj.largura;
};

const retangulo = {
  altura: 5,
  largura: 6,
};

calculaAreaDeRetangulo(retangulo); //?

/* =====================================================================
12 - Impressão de Endereço

Crie uma função que receba 3 parâmetros (bairro, cidade, estado) e imprima os dados em um formato de endereço, utilizando Template String.
*/
const imprimeEndereco = (bairro, cidade, estado) => {
  console.log(`${bairro}, ${cidade}/${estado}`);
};
imprimeEndereco("Avenida Tal", "Linhares", "ES");

// ******************************
// ******************************
// ******************************
cidade1 = {
  nome: "Linhares",
  estado: "ES",
};

cidade2 = {
  nome: "Guarapari",
  estado: "ES",
};

cidade3 = {
  nome: "Feira de Santana",
  estado: "BA",
};

cidade4 = {
  nome: "Posto Da Mata",
  estado: "BA",
};

cidade5 = {
  nome: "Florianópolis",
  estado: "SC",
};

cidade6 = {
  nome: "Balneário Camburiú",
  estado: "SC",
};

cidades = [cidade1, cidade2, cidade3, cidade4, cidade5, cidade6];

/* =====================================================================
13 - Filtrar Cidades

Considerando uma entidade Cidade, contendo os seguintes atributos nome e estado, crie uma função que receba uma lista de cidades e retorne a lista de cidades em que o estado seja “SC”.
*/

const cidadesDeSC = (listaDeCidades) => {
  return listaDeCidades.filter((cidade) => cidade.estado === "SC");
};
cidadesDeSC(cidades); //?

/* =====================================================================
14 - Transformar cidades em uma String concatenada

Considerando a entidade Cidade do exercício 13, crie uma função que recebe uma lista de cidades e retorna uma lista com os nomes das cidades concatenados com o seu estado.
*/

const listaCidadeEEstado = (listaDeCidades) => {
  return listaDeCidades.map((cidade) => `${cidade.nome}/${cidade.estado}`);
};
listaCidadeEEstado(cidades); //?

/* =====================================================================
15 - Verificar existência de Estado

Novamente considerando a entidade Cidade do exercício 13, crie uma função que receba uma lista de cidades e verifique se alguma das cidades é do estado “RS”, retornando o resultado.
*/
const existeCidadeDoRS = (listaDeCidades) => {
  return listaDeCidades.some((cidade) => cidade.estado === "RS");
};
existeCidadeDoRS(cidades); //?

/* =====================================================================
16 - Desmontar entidade

Considerando a entidade Cidade do exercício 13, crie uma função que receba um objeto cidade e atribua nome e o estado a duas variáveis e imprima elas no console.
*/
const desmontarEntidade = (obj) => {
  const { nome, estado } = obj;
  console.log(nome, estado);
};

desmontarEntidade(cidade1);

/* =====================================================================
17 - Ranking de Livros mais Vendidos

Crie uma função que apresente o ranking dos livros mais vendidos. Você precisa diferenciar a posição apenas dos 3 primeiros do ranking, os demais serão apenas listados.
*/

/*
NÃO ERA ISSO QUE O PROFESSOR QUERIA

livro1 = {
  nome: "AAAA",
  posicao: 6,
};

livro2 = {
  nome: "BBBB",
  posicao: 3,
};

livro3 = {
  nome: "CCCC",
  posicao: 1,
};

livro4 = {
  nome: "DDDD",
  posicao: 5,
};

livro5 = {
  nome: "EEEE",
  posicao: 2,
};

livro6 = {
  nome: "FFFF",
  posicao: 4,
};

livros = [livro1, livro2, livro3, livro4, livro5, livro6];

const rankingDosMaisVendidos = (listaDeLivros) => {
  let listaOrdenada = listaDeLivros.sort((a, b) => a.posicao - b.posicao);
  const primeiraparte = listaOrdenada
    .slice(0, 3)
    .map((livro) => `${livro.posicao}º lugar: ${livro.nome}`);
  const segundaparte = listaOrdenada.slice(3).map((livro) => livro.nome);
  return `
Mais vendidos: ${primeiraparte.join(", ")}
Demais: ${segundaparte.join(", ")}`;
};

rankingDosMaisVendidos(livros); //?

*/

// USAR REST OPERATOR
const rankingDosMaisVendidos = (livro1, livro2, livro3, ...outros) => {
  return `
Mais vendidos: 
 - 1º lugar: ${livro1}
 - 2º lugar: ${livro2}
 - 3º lugar: ${livro3}
Demais: ${outros}`;
};
rankingDosMaisVendidos("AAA", "BBB", "CCC", "DDD", "EEE", "FFF"); //?
