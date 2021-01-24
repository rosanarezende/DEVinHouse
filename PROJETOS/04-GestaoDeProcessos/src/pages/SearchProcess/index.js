import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, Typography, Button } from "@material-ui/core";
import * as S from "./styles";

import { getInputSearch } from "../../redux/selectors";

import ProcessoService from "../../service";

import InputSearch from "../../components/InputSearch";
import NewProcess from "../../components/NewProcess";
import Process from "../../components/Process";

import loadingImg from "../../assets/loading2.gif";
import ProcessDetail from "../../components/ProcessDetail";

function SearchProcess() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({
    appears: false,
    processClicked: undefined,
  });
  const [processos, setProcessos] = useState([]);
  const inputSearch = useSelector(getInputSearch);

  useEffect(() => {
    ProcessoService.buscaProcessos().then((response) => {
      setLoading(false);
      setProcessos(response);
    });
  }, []);

  const formatString = (text) =>
    text
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const result = inputSearch
    ? processos.filter((item) => {
        const formatInput = formatString(inputSearch);
        const numero = formatString(item?.numero)?.includes(formatInput);
        const entrada = formatString(item?.entrada)?.includes(formatInput);
        const descricao = formatString(item?.descricao)?.includes(formatInput);
        const assunto = formatString(item?.assunto)?.includes(formatInput);
        const interessados = item.interessados.filter((interessado) =>
          formatString(interessado)?.includes(formatInput)
        );
        // console.log(interessados);
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
            onClick={() => {
              setDetail({
                appears: false,
                processClicked: undefined,
              });
              setOpen(true);
            }}
          >
            Novo
          </Button>
        </S.Top>
      </Box>

      {loading ? (
        <S.LoadingWrapper>
          <img src={loadingImg} alt="loading" />
        </S.LoadingWrapper>
      ) : (
        <>
          <S.ContentWrapper appears={detail.appears}>
            <div className="process">
              {result.map((process) => (
                <Process
                  key={process.id}
                  process={process}
                  setDetail={setDetail}
                  detail={detail}
                />
              ))}
            </div>
            {detail.appears && (
              <div className="detail">
                <ProcessDetail
                  id={detail.processClicked.id}
                  setDetail={setDetail}
                  detail={detail}
                  setOpen={setOpen}
                />
              </div>
            )}
          </S.ContentWrapper>
        </>
      )}

      <NewProcess
        open={open}
        setOpen={setOpen}
        processToEdit={detail.processClicked}
      />
    </>
  );
}

export default SearchProcess;
