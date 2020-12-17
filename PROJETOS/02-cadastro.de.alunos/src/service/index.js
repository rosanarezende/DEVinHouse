import axios from "axios";
import { createServer, Model } from "miragejs";

import { alunosMock } from "./mock";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
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
      this.timing = 750;

      this.get("/alunos", ({ db }) => {
        return db.alunos;
      });

      this.get("/alunos/:id", (schema, request) => {
        let id = request.params.id;
        return schema.alunos.find(id);
      });

      this.post(
        "/alunos",
        (schema, request) => {
          let aluno = JSON.parse(request.requestBody);
          return schema.db.alunos.insert(aluno);
        },
        { timing: 2000 }
      );

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
makeServer();

// const URL = "http://localhost:3002";
// const axiosProvider = axios.create({ baseURL: URL });

export const buscaAlunos = async () => {
  try {
    const response = await axios.get("/api/alunos");
    // const response = await axiosProvider.get(`/alunos`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const buscaAluno = async (id) => {
  try {
    const response = await axios.get(`/api/alunos/${id}`);
    // const response = await axiosProvider.get(`/alunos/${id}`);
    return response.data.aluno;
    // return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const adicionaAluno = async (aluno) => {
  try {
    const response = await axios.post(`/api/alunos`, aluno);
    // const response = await axiosProvider.post(`/alunos`, aluno);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deletaAluno = async (id) => {
  try {
    await axios.delete(`/api/alunos/${id}`);
    // await axiosProvider.delete(`/alunos/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const editaAluno = async (id, aluno) => {
  try {
    const response = await axios.patch(`/api/alunos/${id}`, aluno);
    // await axiosProvider.put(`/alunos/${id}`, aluno);
    return response.data.aluno;
  } catch (error) {
    console.error(error);
  }
};
