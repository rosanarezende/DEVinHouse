import axios from "axios";

const URL = "http://localhost:3002";

const axiosProvider = axios.create({
  baseURL: URL,
});

export const buscaAlunos = async () => {
  try {
    const response = await axiosProvider.get(`/alunos`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const adicionaAluno = async (aluno) => {
  try {
    const response = await axiosProvider.post(`/alunos`, aluno);
    buscaAlunos();
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
