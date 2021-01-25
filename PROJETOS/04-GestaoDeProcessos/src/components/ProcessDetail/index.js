import { useState, useEffect } from "react";

import ProcessoService from "../../service";

import { Typography, Button } from "@material-ui/core";
import * as S from "./styles";

import processImg from "../../assets/process-fake.png";
import loadingImg from "../../assets/loading2.gif";
import closeIcon from "../../assets/close.png";
import MessageAlert from "../MessageAlert";

function ProcessDetail({ id, setDetail, setOpen, setProcessos }) {
  const [loading, setLoading] = useState(true);
  const [process, setProcess] = useState({});
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setLoading(true);
    ProcessoService.buscaProcesso(id).then((response) => {
      setLoading(false);
      setProcess(response);
    });
  }, [id]);

  const removeProcess = () => {
    ProcessoService.deletaProcesso(id)
      .then(() => {
        ProcessoService.buscaProcessos().then((response) => {
          setProcessos(response);
        });
      })
      .then(() =>
        setDetail({
          processClicked: undefined,
          appears: false,
        })
      );
    setAlert(true);
  };

  return loading ? (
    <img src={loadingImg} alt="loading" />
  ) : (
    <>
      <S.ProcessDetailWrapper>
        <img
          className="close"
          alt="close"
          src={closeIcon}
          onClick={() =>
            setDetail({
              processClicked: undefined,
              appears: false,
            })
          }
        />

        <div className="top">
          <div>
            <img alt="processo" src={processImg} />
          </div>

          <div className="top_content">
            <div className="process-number">
              <Typography variant="h3">Processo</Typography>
              <Typography variant="h2">{process?.numero}</Typography>
            </div>
            <div>
              <Typography variant="h3">Data</Typography>
              <Typography variant="h2">{process?.entrada}</Typography>
            </div>
            <div className="subject">
              <Typography variant="h3">Assunto</Typography>
              <Typography variant="h2">{process?.assunto}</Typography>
            </div>
          </div>
        </div>

        <div>
          <Typography variant="h3">Interessados</Typography>
          <div className="interested">
            {process?.interessados?.map((item, index) => (
              <Typography key={index}>{item}</Typography>
            ))}
          </div>
        </div>

        <div className="description">
          <Typography variant="h3">Descrição</Typography>
          <Typography>{process?.descricao}</Typography>
        </div>

        <div className="buttons">
          <Button variant="outlined" onClick={removeProcess} className="remove">
            Remover
          </Button>
          <Button
            variant="outlined"
            onClick={() => setOpen(true)}
            color="primary"
          >
            Editar
          </Button>
        </div>
      </S.ProcessDetailWrapper>

      <MessageAlert
        alert={alert}
        setAlert={setAlert}
        message="Processo deletado com sucesso!"
      />
    </>
  );
}

export default ProcessDetail;
