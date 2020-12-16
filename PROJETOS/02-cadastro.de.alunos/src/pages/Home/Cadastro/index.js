import { useState } from "react";
import { EditorState } from "draft-js";

import books from "../../../assets/books.svg";

import { fieldsContent } from "./constants";

import {
  Typography,
  TextField,
  MenuItem,
  FormLabel,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import * as S from "./styles";

import EditorInput, {
  formatEditorOutput,
} from "../../../components/EditorInput";

function Cadastro() {
  const [input, setInput] = useState({});

  const [restricao, setRestricao] = useState(false);
  const [descreveRestricao, setDescreveRestricao] = useState("");

  const [autorizacao, setAutorizacao] = useState(true);

  const [observacoes, setObservacoes] = useState(EditorState.createEmpty());
  const observacoesFormatadas = formatEditorOutput(observacoes);

  const [turma, setTurma] = useState("");
  const turmas = ["a", "b", "c"];

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      input,
      restricao,
      descreveRestricao,
      autorizacao,
      observacoesFormatadas
    );
  };

  return (
    <S.CadastroWrapper>
      <Typography variant="h3">Cadastro de alunos</Typography>

      <S.Content>
        <S.PaperStyled>
          <form onSubmit={handleSubmit}>
            <div id="inputs">
              {fieldsContent.map((item, index) => (
                <TextField
                  // required
                  key={index}
                  variant="outlined"
                  size="small"
                  margin="dense"
                  className={item.className}
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
              ))}

              <div className="quarenta restricao">
                <FormLabel component="legend">
                  Possui restrição alimentar?
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
                  label="Descrição das Restrições Alimentares"
                  value={descreveRestricao || ""}
                  onChange={setDescreveRestricao}
                />
              )}

              <div id="autorizacao">
                <FormLabel component="legend">
                  Autorização de fotos e vídeos da criança para uso escolar
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

              {/* 10. Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia */}

              <TextField
                // required
                select
                variant="outlined"
                size="small"
                margin="dense"
                className="cinquenta"
                label="Turma"
                value={turma || ""}
                onChange={setTurma}
              >
                {turmas.map((option, index) => (
                  <MenuItem
                    style={{
                      justifyContent: "center",
                    }}
                    key={index}
                    value={option}
                  >
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <br />

            <EditorInput
              editorState={observacoes}
              setEditorState={setObservacoes}
              text="Observações adicionais"
            />

            <div id="buttons-wrapper">
              <Button type="submit" color="primary" variant="outlined">
                Salvar
              </Button>
            </div>
          </form>
        </S.PaperStyled>
        <img src={books} alt="livros" id="img-book" />
      </S.Content>
    </S.CadastroWrapper>
  );
}

export default Cadastro;
