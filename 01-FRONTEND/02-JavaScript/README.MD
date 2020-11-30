# SEMANA 02 - JAVASCRIPT

<br>

## Exercícios 1 a 7

Por serem mais simples, foram desenvolvidos na pasta `exercicios` 

<br><br>

### 1 - Alerte o Usuário

Utilizando JavaScript, emita um alerta para o usuário com alguma informação importante.

```
window.alert("Olá usuário!");
```

<br><br>

### 2 - Faça com que o usuário confirme antes de seguir

Utilizando JavaScript, peça a confirmação do usuário ao clicar em algum botão, perguntando se ele deseja realmente realizar aquela ação

```
<button id="confirm" onclick="window.confirm('Quer prosseguir?')">Confirm</button>
```

<br><br>

### 3 - Peça o nome do usuário e exiba na tela

Faça com que o navegador do usuário pergunte o nome dele(a). Utilizando o método alert, exiba o nome inserido pelo usuário.

```
var nome = window.prompt("Qual seu nome? ");
window.alert(`Olá ${nome}!`);
```

<br><br>

### 4 - Pergunte ao usuário e exiba no console

Pergunte ao usuário: 
- nome (prompt)
- idade (prompt)
- e se gosta de praticar algum esporte (confirm).

Crie 3 variáveis para guardar as respostas do usuário: uma deve receber um valor textual (string), outra deve receber um valor numérico (number), e outra um valor de verdadeiro ou falso (boolean). 

Faça com que esses 3 valores sejam exibidos no console do navegador.

```
var nome = window.prompt("Qual seu nome? ");
var idade = Number(window.prompt("Qual sua idade? (numero) "));
var esporte = window.confirm("Gosta de praticar esporte? ");

console.log(
  `${nome} tem ${idade} anos e ${
    esporte ? "" : "não"
  } gosta de praticar esportes`
);
```

<br><br>

### 5 - Pergunte nome e sobrenome e exiba na tela

Faça 2 prompts ao usuário:
- No primeiro, pergunte o seu sobrenome.
- No segundo, pergunte o seu nome.

Em seguida, exiba na tela um alert contendo o nome completo do usuário, na ordem correta (ou seja: Nome Sobrenome).

```
var sobrenome = window.prompt("Qual seu sobrenome? ");
var nome = window.prompt("Qual seu nome? ");

window.alert(`${nome} ${sobrenome}`);
```

<br><br>

### 6 - Pergunte o último sobrenome e exiba em letras maiúsculas, junto do tamanho

Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um alert contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome.

```
var ultimoSobrenome = window.prompt("Qual seu último sobrenome? ");

window.alert(
  `Olá, ${ultimoSobrenome.toUpperCase()}. Seu sobrenome contém ${
    ultimoSobrenome.length
  } letras.`
);
```

<br><br>

### 7 - Pergunte o ano atual e o ano de nascimento, exiba na tela a idade
Faça 2 prompts ao usuário: 
- No primeiro, pergunte o ano de nascimento. 
- No segundo, pergunte o ano atual. 

Em seguida, exiba na tela um alert contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.

```
var anoDeNascimento = Number(
  window.prompt("Qual o ano do seu nascimento? (número)")
);
var anoAtual = Number(window.prompt("Qual o ano atual? (número)"));

window.alert(
  `Sua idade é ${anoAtual - anoDeNascimento} ou ${
    anoAtual - anoDeNascimento - 1
  }.`
);
```

<br><br><br>

## Exercícios 8 a 17

Os exercícios abaixo foram desenvolvidos em páginas HTML próprias.

<br><br>

### 8 - Calcule automaticamente a idade

Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado “calcular idade”. 

Programe uma função a ser executada quando o usuário clicar no botão, que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.

<br><br>

### 9 - Construa uma calculadora simples

Faça uma página HTML contendo 2 campos de texto (dica: input type number), para que o usuário possa inserir, em cada um, o valor que deseja calcular. 

Coloque também na sua página 4 botões, um indicando soma, outro subtração, outro multiplicação, e outro divisão.

Adicione um outro campo de texto, apenas leitura (readonly).

Quando o usuário clicar no botão de soma (multiplicação, divisão ou subtração), a sua página deve somar (multiplicar, dividir ou subtrair) os 2 valores inseridos pelo usuário e exibir o resultado no campo de texto readonly.

<br><br>

### 10 - Programe um verificador de números pares

Em uma página HTML, insira um campo de texto para que o usuário insira um número.

Programe uma função em JavaScript para verificar se o número inserido pelo usuário é par ou ímpar, e informe o usuário através de um texto na página HTML.

<br><br>

### 11 - Faça um relógio

Construa uma página HTML contendo um texto que informa o horário no momento de acesso, no formato “23:59” (HH:mm).

<br><br>

### 12 - Faça um relógio que atualize automaticamente

Construa uma página HTML contendo um texto que informa o horário atual, no formato “23:59”, e que atualize automaticamente o valor, sempre que mudar o horário.

<br><br>

### 13 - Construa uma página que informe a estação do ano no dia de acesso

Sua página deve conter um texto e uma imagem, ambos representando a estação.

Ao carregar a página, baseado na data atual, seu código deve verificar qual a estação atual do ano no hemisfério sul, e deve alterar o texto e a imagem, para que passem a representar a estação correta.

<br><br>

### 14 - Faça uma página de “lista de mercado”

Sua página deve possibilitar ao usuário inserir itens em uma lista e exibir a lista atualizada a medida que forem sendo adicionados novos itens.

A página deve conter um rótulo (label) “Item a adicionar:” seguido de um campo de texto onde o usuário possa digitar o item. 

Deve conter também um botão “Adicionar”, que no momento do clique do usuário deve inserir o item digitado na lista. 

Se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto. 

A página também deve conter uma lista (select), que exibirá os itens adicionados pelo usuário.

<br><br>

### 15 - Salve a lista de mercado

Utilizando a mesma página do exercício anterior:
https://trello.com/c/SUNLYM0V/20-sp02-fa%C3%A7a-uma-p%C3%A1gina-de-lista-de-mercado 

Adicione um novo botão “Salvar lista”. 

Quando o usuário clicar nesse botão, a lista de itens de mercado deve ser salva no Local Storage do navegador.

<br><br>

### 16 - Carregue uma lista salva anteriormente

Utilizando a mesma página dos 2 exercícios anteriores:
https://trello.com/c/SUNLYM0V/20-sp02-fa%C3%A7a-uma-p%C3%A1gina-de-lista-de-mercado 
e 
https://trello.com/c/3y0M3hBY/21-sp02-salve-a-lista-de-mercado 

Crie um novo botão “Carregar lista”, que ao ser clicado deve buscar no Local Storage se existe uma lista de itens de mercado salva, e em caso positivo deve mostrar os itens no elemento da página.

Caso não haja nenhuma lista previamente salva, deve informar o usuário “Não há itens salvos”.

<br><br>

### 17 - Construa uma “calculadora” de P.A. e P.G.

Na página HTML devem existir 2 campos de texto (dica: input type number): um rotulado (label) “valor inicial”, e outro rotulado “raiz”. 

Também deve ter 2 botões: um rotulado “Calcular P.A.” e outro rotulado “Calcular P.G.”. 

O evento click de cada botão deve chamar uma função que: verifica se os campos estão preenchidos (dica: length) e, se estiverem vazios, deve mostrar uma mensagem ao usuário pedindo para inserir os valores; caso os campos estejam preenchidos, deve calcular os 10 primeiros valores da sequência e exibir na tela. 


Relembrando: 

- P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28. 

- P.G. (Progressão Geométrica) é como uma P.A., mas em vez de somar, multiplica-se a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.G. = 1, 3, 9, 27, 81...


