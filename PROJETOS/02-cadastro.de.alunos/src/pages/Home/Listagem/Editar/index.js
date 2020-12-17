import { useState, useEffect } from "react";
import { EditorState } from "draft-js";

import { buscaAluno } from "../../../../service";
import {
  fieldsContent,
  authorizedFieldsContent,
} from "../../Cadastro/constants";

import * as S from "./styles";
import {
  DialogContent,
  Typography,
  Button,
  DialogActions,
} from "@material-ui/core";

import EditorInput, {
  formatEditorInput,
  formatEditorOutput,
} from "../../../../components/EditorInput";
import Inputs from "../../../../components/Inputs";
import InputList from "../../../../components/InputList";
import ConditionalSwitch from "../../../../components/ConditionalSwitch ";
import Switch from "../../../../components/Switch";

function Editar({ editOpen, setEditOpen, alunoClicado }) {
  console.log(editOpen, alunoClicado);

  const [input, setInput] = useState({});

  const [restricao, setRestricao] = useState(false);
  const [descreveRestricao, setDescreveRestricao] = useState("");

  const [autorizacao, setAutorizacao] = useState(true);

  const [observacoes, setObservacoes] = useState(EditorState.createEmpty());
  const observacoesFormatadas = formatEditorOutput(observacoes);

  const [autorizados, setAutorizados] = useState([
    { autorizadoNome: "", autorizadoVinculo: "" },
  ]);

  useEffect(() => {
    buscaAluno(alunoClicado.id).then((response) => {
      const {
        aluno,
        responsavel,
        emergencia,
        autorizadosBuscar,
        autorizacaoFotoVideo,
        observacoes,
      } = response;

      setInput({
        nome: aluno.nome,
        nascimento: aluno.nascimento,
        turma: aluno.turma,
        responsavel: responsavel.nome,
        telefone: responsavel.telefone,
        emergenciaContato: emergencia.avisar,
        emergenciaTelefone: emergencia.telefone,
      });
      setRestricao(aluno.restricoesAlimentares.possui);
      setDescreveRestricao(aluno.restricoesAlimentares.detalhes);
      setAutorizacao(autorizacaoFotoVideo);
      setObservacoes(formatEditorInput(observacoes));
      setAutorizados(
        autorizadosBuscar.map((item) => {
          const novoItem = item.split(" - ");
          return {
            autorizadoNome: novoItem[0],
            autorizadoVinculo: novoItem[1],
          };
        })
      );
    });
  }, [alunoClicado.id]);

  const telefoneMask = (telefoneNumber) => {
    return telefoneNumber
      .replace(/\D/g, "")
      .replace(/^(\d\d)(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    if (name === "telefone") {
      setInput({ ...input, telefone: telefoneMask(value) });
    } else if (name === "emergenciaTelefone") {
      setInput({ ...input, emergenciaTelefone: telefoneMask(value) });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      nome,
      nascimento,
      turma,
      responsavel,
      telefone,
      emergenciaContato,
      emergenciaTelefone,
    } = input;

    const removeMask = (value) => Number(value?.replace(/\D/g, ""));

    const autorizadosFormatado = autorizados
      .map((item) => `${item.autorizadoNome} - ${item.autorizadoVinculo}`)
      .filter((i) => i !== " - ");

    const data = {
      aluno: {
        nome,
        nascimento,
        turma,
        restricoesAlimentares: {
          possui: restricao,
          detalhes: descreveRestricao ?? "",
        },
      },
      responsavel: {
        nome: responsavel,
        telefone: removeMask(telefone),
      },
      emergencia: {
        avisar: emergenciaContato,
        telefone: removeMask(emergenciaTelefone),
      },
      autorizadosBuscar: autorizadosFormatado,
      autorizacaoFotoVideo: autorizacao,
      observacoes: observacoesFormatadas,
    };
    console.log(data);
    // adicionaAluno(data).then(() =>
    //   buscaAlunos().then((response) => setAlunos(response))
    // );
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  return (
    <S.EditarWrapper onClose={handleClose} open={editOpen}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Inputs
            data={fieldsContent}
            input={input}
            changeInput={changeInput}
          />

          <InputList
            data={autorizados}
            setData={setAutorizados}
            internData={authorizedFieldsContent}
          />

          <ConditionalSwitch
            switchData={restricao}
            setSwitchData={setRestricao}
            inputData={descreveRestricao}
            setInputData={setDescreveRestricao}
          />
          <br />

          <Switch data={autorizacao} setData={setAutorizacao} />
          <br />

          <Typography variant="h5" gutterBottom>
            Observações adicionais
          </Typography>
          <EditorInput
            editorState={observacoes}
            setEditorState={setObservacoes}
            text="Escreva nesse espaço as observações que considerar importantes"
          />
        </form>
      </DialogContent>
      <DialogActions
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <Button type="submit" color="primary" variant="contained">
          Salvar
        </Button>

        <Button
          type="button"
          color="secondary"
          variant="outlined"
          onClick={handleClose}
        >
          Cancelar
        </Button>
      </DialogActions>
    </S.EditarWrapper>
  );
}

export default Editar;
