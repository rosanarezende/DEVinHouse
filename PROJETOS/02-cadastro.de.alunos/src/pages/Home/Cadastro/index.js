import { useState } from "react";
import { EditorState } from "draft-js";

import books from "../../../assets/books.svg";

import { fieldsContent, authorizedFieldsContent } from "./constants";

import {
  Typography,
  TextField,
  MenuItem,
  FormLabel,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import * as S from "./styles";

import EditorInput, {
  formatEditorOutput,
} from "../../../components/EditorInput";

function Cadastro() {
  const [novo, setNovo] = useState(false);

  const [input, setInput] = useState({});

  const [restricao, setRestricao] = useState(false);
  const [descreveRestricao, setDescreveRestricao] = useState("");

  const [autorizacao, setAutorizacao] = useState(true);

  const [observacoes, setObservacoes] = useState(EditorState.createEmpty());
  const observacoesFormatadas = formatEditorOutput(observacoes);

  // const [turma, setTurma] = useState("");

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

  const adicionaCampoAutorizado = () => {
    setAutorizados([
      ...autorizados,
      { autorizadoNome: "", autorizadoVinculo: "" },
    ]);
  };

  const removeCampoAutorizado = (position) => {
    var filtered = autorizados.filter((value, index) => position !== index);
    setAutorizados(filtered);
  };

  const adicionaPessoaAutorizada = (position, field, value) => {
    const updatedItems = autorizados.map((autorizado, index) => {
      return index === position
        ? { ...autorizado, [field]: value }
        : autorizado;
    });
    setAutorizados(updatedItems);
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
        
    const removeMask = (value) => Number(value?.replace(/\D/g, ""))
    
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

    // limparCampos()
    // setNovo(false)
  };

  return (
    <S.CadastroWrapper>
      <Typography variant="h3">Cadastro de alunos</Typography>

      <S.Content>
        <S.PaperStyled>
          {novo ? (
            <form onSubmit={handleSubmit}>
              <div id="inputs">
                {fieldsContent.map((item, index) => (
                  <div
                    key={index}
                    id={item.top && "top"}
                    className={item.className}
                  >
                    {item.top && (
                      <Typography variant="h5">{item.top}</Typography>
                    )}
                    <TextField
                      required
                      variant="outlined"
                      size="small"
                      margin="dense"
                      fullWidth
                      // className={item.className}
                      helperText={item.helper}
                      type={item.type}
                      name={item.name}
                      label={item.label}
                      value={input[item.name] || ""}
                      onChange={changeInput}
                      select={item.select}
                      InputLabelProps={{
                        shrink: item.shrink,
                      }}
                      InputProps={{
                        inputProps: {
                          max: item.max,
                          pattern: item.pattern,
                          title: item.title,
                          style: {
                            textAlign: "center",
                          },
                        },
                      }}
                    >
                      {item.select &&
                        item.data.map((option) => (
                          <MenuItem
                            style={{
                              justifyContent: "center",
                            }}
                            key={option.id}
                            value={option.name}
                          >
                            {option.name}
                          </MenuItem>
                        ))}
                    </TextField>
                  </div>
                ))}
              </div>

              <div id="autorizados">
                <Typography variant="h5">
                  Pessoas autorizadas a buscar a criança
                </Typography>
                {autorizados.map((autorizado, index) => (
                  <div key={index} id="autorizado">
                    <S.CloseIcon onClick={() => removeCampoAutorizado(index)}>
                      <Close />
                    </S.CloseIcon>
                    <div id="inputs">
                      {authorizedFieldsContent.map((item, i) => (
                        <TextField
                          // required
                          key={i}
                          variant="outlined"
                          size="small"
                          margin="dense"
                          className={item.className}
                          helperText={item.helper}
                          type={item.type}
                          name={item.name}
                          label={item.label}
                          value={autorizado[item.name] || ""}
                          onChange={(e) =>
                            adicionaPessoaAutorizada(
                              index,
                              item.name,
                              e.target.value
                            )
                          }
                          select={item.select}
                          // InputLabelProps={{ shrink: item.shrink }}
                        >
                          {item.select &&
                            item.data.map((option) => (
                              <MenuItem
                                style={{ justifyContent: "center" }}
                                key={option.id}
                                value={option.name}
                              >
                                {option.name}
                              </MenuItem>
                            ))}
                        </TextField>
                      ))}
                    </div>
                  </div>
                ))}
                <div id="adicionar">
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={adicionaCampoAutorizado}
                  >
                    + autorizado
                  </Button>
                </div>
              </div>

              <Typography variant="h5" gutterBottom>
                Restrições alimentares
              </Typography>
              <div id="inputs">
                <div className="quarenta" id="restricao">
                  <FormLabel component="legend">
                    A criança possui restrição alimentar?
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={restricao}
                        onChange={(event) => setRestricao(event.target.checked)}
                        name="restricao"
                      />
                    }
                    label="Sim"
                  />
                </div>

                {restricao && (
                  <TextField
                    // required
                    variant="outlined"
                    multiline
                    rows={3}
                    size="small"
                    margin="dense"
                    className="sessenta"
                    type="text"
                    label="Descrição das restrições alimentares"
                    value={descreveRestricao || ""}
                    onChange={(e) => setDescreveRestricao (e.target.value)}
                  />
                )}
              </div>

              <br />

              <Typography variant="h5" gutterBottom>
                Autorização
              </Typography>
              <div>
                <FormLabel component="legend">
                  Concede autorização de fotos e vídeos da criança para uso
                  escolar?
                </FormLabel>
                <FormControlLabel
                  control={
                    <Switch
                      checked={autorizacao}
                      onChange={(event) => setAutorizacao(event.target.checked)}
                      name="autorizacao"
                    />
                  }
                  label="Sim"
                />
              </div>

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
                <Button type="submit" color="primary" variant="contained">
                  Salvar
                </Button>

                <Button
                  type="button"
                  color="secondary"
                  variant="outlined"
                  onClick={() => setNovo(false)}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          ) : (
            <div id="novo">
              <Typography variant="h6" align="center" gutterBottom>
                Clique no botão para cadastrar um novo aluno
              </Typography>
              <br />
              <div id="buttons-wrapper">
                <Button
                  type="button"
                  color="primary"
                  variant="outlined"
                  onClick={novoAluno}
                >
                  NOVO
                </Button>
              </div>
            </div>
          )}
        </S.PaperStyled>
        <img src={books} alt="livros" id="img-book" />
      </S.Content>
    </S.CadastroWrapper>
  );
}

export default Cadastro;
