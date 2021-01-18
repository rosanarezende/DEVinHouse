import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, Typography, Button } from "@material-ui/core";
import * as S from "./styles";

import { getInputSearch } from "../../redux/selectors";

import ProcessoService from "../../service";

import InputSearch from "../../components/InputSearch";
import NewProcess from "../../components/NewProcess";
import Process from "../../components/Process";

function SearchProcess() {
  const [open, setOpen] = useState(false);
  const [processos, setProcessos] = useState([]);
  const inputSearch = useSelector(getInputSearch);

  useEffect(() => {
    ProcessoService.buscaProcessos().then((response) => setProcessos(response));
  }, []);

  const formatString = (text) =>
    text
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  console.log("input", inputSearch);
  console.log("processos", processos);

  const result = inputSearch
    ? processos.filter((item) => {
        const numero = formatString(item?.numero)?.includes(
          formatString(inputSearch)
        );
        const entrada = formatString(item?.entrada)?.includes(
          formatString(inputSearch)
        );
        const descricao = formatString(item?.descricao)?.includes(
          formatString(inputSearch)
        );
        const assunto = formatString(item?.assunto)?.includes(
          formatString(inputSearch)
        );
        const interessados = item.interessados.filter((x) =>
          formatString(x)?.includes(formatString(inputSearch))
        );
        return numero || entrada || descricao || assunto || interessados[0];
      })
    : [];

  return (
    <>
      <Box m={4}>
        <S.Top>
          <Typography variant="h2" className="subtitle">
            Busca de processos
          </Typography>

          <InputSearch
            // inputClick={dispatch(setInputSearch(undefined))}
            // inconClick={() => history.push("/process/search")}
            marginInput="0 20px"
          />

          <Button
            variant="outlined"
            className="novo"
            onClick={() => setOpen(true)}
          >
            Novo
          </Button>
        </S.Top>
      </Box>

      {result.map((process) => (
        <Process process={process} />
      ))}

      <NewProcess open={open} setOpen={setOpen} />
    </>
  );
}

export default SearchProcess;
