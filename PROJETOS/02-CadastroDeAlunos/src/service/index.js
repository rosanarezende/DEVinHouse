import axios from "axios";
// ==== MIRAGE
// relação entre tabelas ( https://miragejs.com/docs/main-concepts/relationships/ )
// shorthand ( https://miragejs.com/docs/main-concepts/shorthands/ )
// mais específicos ( https://miragejs.com/docs/main-concepts/models/ )
import { createServer, Model } from "miragejs";

import { alunosMock } from "./mock";

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    models: {
      aluno: Model,
    },

    seeds(server) {
      server.db.loadData({
        alunos: alunosMock,
      });
    },

    routes() {
      this.namespace = "api";
      // this.timing = 750;

      this.get("/alunos", ({ db }) => {
        return db.alunos;
      });

      this.get("/alunos/:id", (schema, request) => {
        let id = request.params.id;
        return schema.alunos.find(id);
      });

      this.post("/alunos", (schema, request) => {
        let aluno = JSON.parse(request.requestBody);
        return schema.db.alunos.insert(aluno);
      });

      this.delete("/alunos/:id", (schema, request) => {
        return schema.db.alunos.remove(request.params.id);
      });

      this.patch("/alunos/:id", (schema, request) => {
        let novoAluno = JSON.parse(request.requestBody);
        let id = request.params.id;
        let aluno = schema.alunos.find(id);
        return aluno.update(novoAluno);
      });
    },
  });

  return server;
}
// if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {}
makeServer({ environment: process.env.NODE_ENV });

class AlunoService {
  async buscaAlunos() {
    try {
      const response = await axios.get("/api/alunos");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async buscaAluno(id) {
    try {
      const response = await axios.get(`/api/alunos/${id}`);
      return response.data.aluno;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async adicionaAluno(aluno) {
    try {
      const response = await axios.post(`/api/alunos`, aluno);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async deletaAluno(id) {
    try {
      await axios.delete(`/api/alunos/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  async editaAluno(id, aluno) {
    try {
      const response = await axios.patch(`/api/alunos/${id}`, aluno);
      return response.data.aluno;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new AlunoService();
