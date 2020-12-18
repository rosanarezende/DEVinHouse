// import { startMirage, shutdown } from "miragejs";

// let server;

// beforeEach(() => {
//   server = startMirage();
// });

// afterEach(() => {
//   server.shutdown();
// });

import { makeServer } from "./index";

test.skip("Criação de aluno", async function (assert) {
  await visit("/alunos/new");
  await fillIn("aluno", {
    nome: "Aluninha Teste",
    nascimento: "2010-01-06",
    turma: "Turma 2",
    restricoesAlimentares: {
      possui: true,
      detalhes: "Tal e tal",
    },
  });
  await click(".submit");

  // assert.dom("h2").includesText("New movie saved!")
  assert.equal(server.db.alunos[0].nome, "Aluninha Teste");
});

test.skip("I can see the title of a post", async function (assert) {
  let aluno = makeServer().create("aluno", {
    aluno: {
      nome: "Aluninha Teste",
      nascimento: "2010-01-06",
      turma: "Turma 2",
      restricoesAlimentares: {
        possui: true,
        detalhes: "Tal e tal",
      },
    },
  });

  // await visit("/api/alunos");

  // assert.dom("h1").hasText("My first post")
  assert.equal(aluno.nome, "Aluninha Teste");
});
