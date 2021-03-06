import axios from "axios";
import { createServer, Model } from "miragejs";
import { mock as processos } from "./mock";

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    models: {
      processo: Model,
    },

    seeds(server) {
      server.db.loadData({
        processos,
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 1200;

      this.get("/processo", ({ db }) => {
        return db.processos;
      });

      this.get("/processo/:id", (schema, request) => {
        let id = request.params.id;
        return schema.processos.find(id);
      });

      this.post("/processo", (schema, request) => {
        let item = JSON.parse(request.requestBody);
        return schema.db.processos.insert(item);
      });

      this.delete("/processo/:id", (schema, request) => {
        let id = request.params.id;
        return schema.db.processos.remove(id);
      });

      this.patch("/processo/:id", (schema, request) => {
        let novoProcesso = JSON.parse(request.requestBody);
        let id = request.params.id;
        let item = schema.processos.find(id);
        return item.update(novoProcesso);
      });
    },
  });

  return server;
}
// if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {}
makeServer({ environment: process.env.NODE_ENV });

class ProcessoService {
  async buscaProcessos() {
    try {
      const response = await axios.get("/api/processo");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async buscaProcesso(id) {
    try {
      const response = await axios.get(`/api/processo/${id}`);
      return response.data?.processo;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async adicionaProcesso(item) {
    try {
      const response = await axios.post(`/api/processo`, item);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async deletaProcesso(id) {
    try {
      await axios.delete(`/api/processo/${id}`);
      this.buscaProcessos();
    } catch (error) {
      console.error(error);
    }
  }

  async editaProcesso(id, item) {
    try {
      const response = await axios.patch(`/api/processo/${id}`, item);
      // this.buscaProcesso(response.data.processo.id);
      // console.log(response.data.processo.id);
      return response.data.processo;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new ProcessoService();
