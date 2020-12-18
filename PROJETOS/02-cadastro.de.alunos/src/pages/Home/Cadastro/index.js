import { useState } from "react";
import { EditorState } from "draft-js";

import books from "../../../assets/books.svg";

import { fieldsContent, authorizedFieldsContent } from "./constants";

import AlunoService from "../../../service";

import { Typography, Button } from "@material-ui/core";
import * as S from "./styles";

import EditorInput, {
  formatEditorOutput,
} from "../../../components/EditorInput";
import Inputs from "../../../components/Inputs";
import InputList from "../../../components/InputList";
import ConditionalSwitch from "../../../components/ConditionalSwitch ";
import Switch from "../../../components/Switch";
import Novo from "./Novo";

function Cadastro({ setAlunos }) {
  const [novo, setNovo] = useState(false);

  const [input, setInput] = useState({});

  const [restricao, setRestricao] = useState(false);
  const [descreveRestricao, setDescreveRestricao] = useState("");

  const [autorizacao, setAutorizacao] = useState(true);

  const [observacoes, setObservacoes] = useState(EditorState.createEmpty());
  const observacoesFormatadas = formatEditorOutput(observacoes);

  const [autorizados, setAutorizados] = useState([
    { autorizadoNome: "", autorizadoVinculo: "" },
  ]);

  const limparCampos = () => {
    setInput({});
    setRestricao(false);
    setDescreveRestricao("");
    setAutorizacao(true);
    setObservacoes(EditorState.createEmpty());
  };

  const novoAluno = () => {
    limparCampos();
    setNovo(true);
  };

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
    AlunoService.adicionaAluno(data)
      .then(() => AlunoService.buscaAlunos().then((response) => setAlunos(response)))
      .then(() => {
        limparCampos();
        setNovo(false);
      });
  };

  return (
    <S.CadastroWrapper>
      <Typography variant="h3">Cadastro de alunos</Typography>

      <S.Content>
        <S.PaperStyled>
          {novo ? (
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

              <div id="buttons-wrapper">
                <Button
           
                        type="submit"
    
                               color="primary"
        
                           variant="contained"
            
                       name="salvar"
                
                >
                  Salvar
                </Button>

                <Button
                  type="button"
                  color="secondary"
                  variant="outlined"
                  onClick={() => setNovo(false)}
                  name="cancelar"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          ) : (
            <Novo add={novoAluno} />
          )}
        </S.PaperStyled>
        <img src={books} alt="livros" id="img-book" />
      </S.Content>
    </S.CadastroWrapper>
  );
}

export default Cadastro;
