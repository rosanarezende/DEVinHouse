import { useState, useEffect } from "react";

import { Close } from "@material-ui/icons";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
} from "@material-ui/core";
import { CloseIcon, DialogContentStyled } from "./styles";

import ProcessoService from "../../service";
import { today } from "./constants";

import AddInterested from "../AddInterested";
import MessageAlert from "../MessageAlert";

function NewProcess({ open, setOpen, processToEdit }) {
  const [inputs, setInputs] = useState({
    assunto: processToEdit ? processToEdit.assunto : "",
    interessados: processToEdit ? processToEdit.interessados : [],
    descricao: processToEdit ? processToEdit.descricao : "",
  });
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (processToEdit) {
      setInputs({
        assunto: processToEdit.assunto,
        interessados: processToEdit.interessados,
        descricao: processToEdit.descricao,
      });
    }

    return () =>
      setInputs({
        assunto: "",
        interessados: [],
        descricao: "",
      });
  }, [processToEdit]);

  const [tempInterested, setTempInterested] = useState("");

  const handleChangeInput = (event) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const saveProcess = () => {
    const { assunto, interessados, descricao } = inputs;
    const numero = `SOFT 2021/${Math.ceil(
      Math.random() * (1 - 99999) + 99999
    )}`;
    if (processToEdit) {
      const itemToEdit = {
        descricao,
        assunto,
        interessados,
      };
      setInputs({
        descricao,
        assunto,
        interessados,
      });
      ProcessoService.editaProcesso(processToEdit.id, itemToEdit)
      // .then(
      //   (response) => {
      //     console.log(response);
      //     setInputs({
      //       assunto: response.assunto,
      //       interessados: response.interessados,
      //       descricao: response.descricao,
      //     });
      //   }
      // )
      ProcessoService.buscaProcesso(processToEdit.id).then(response => setInputs({
        assunto: response.assunto,
        interessados: response.interessados,
        descricao: response.descricao,
      }))
    } else {
      const item = {
        entrada: today,
        numero,
        descricao,
        assunto,
        interessados,
      };
      ProcessoService.adicionaProcesso(item);
      setAlert(true)
    }

    setOpen(false);
  };

  return (
    <>
    <Dialog
      onClose={() => setOpen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CloseIcon aria-label="close" onClick={() => setOpen(false)}>
          <Close />
        </CloseIcon>
      </div>
      <DialogTitle style={{ padding: "16px 20px 0" }}>
        Cadastro de processo
      </DialogTitle>

      <DialogContentStyled>
        <Typography variant="body2">Assunto</Typography>
        <div>
          <TextField
            color="secondary"
            value={inputs.assunto}
            name="assunto"
            onChange={handleChangeInput}
          />
        </div>

        <AddInterested
          inputs={inputs}
          setInputs={setInputs}
          tempInterested={tempInterested}
          setTempInterested={setTempInterested}
        />

        <Typography variant="body2">Descrição</Typography>
        <TextField
          color="secondary"
          multiline
          value={inputs.descricao}
          name="descricao"
          onChange={handleChangeInput}
        />

        <DialogActions>
          <Button onClick={saveProcess} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </DialogContentStyled>
    </Dialog>

    <MessageAlert alert={alert}
        setAlert={setAlert}
        message="Processo cadastrado com sucesso!"/>
    </>
  );
}

export default NewProcess;
