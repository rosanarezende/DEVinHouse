import { useState } from "react";
import MaterialTable from "material-table";

import { tableTranslation, columns } from "./constants";

import AlunoService from "../../../service";

import amigos from "../../../assets/amigos.svg";
import { Typography } from "@material-ui/core";
import * as S from "./styles";

import Detalhes from "./Detalhes";
import Editar from "./Editar";
import Confirm from "../../../components/Confirm";

function Listagem({ alunos, setAlunos }) {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [alunoClicado, setAlunoClicado] = useState(undefined);

  const deletaAlunoClicado = () => {
    AlunoService.deletaAluno(alunoClicado.id)
      .then(() =>
        AlunoService.buscaAlunos().then((response) => {
          setAlunos(response);
        })
      )
      .then(() => setOpen(false));
  };

  const handleClickDelete = (alunoDado) => {
    setAlunoClicado(alunoDado);
    setOpen(true);
  };

  const handleUpdate = (alunoDado) => {
    setAlunoClicado(alunoDado);
    setEditOpen(true);
  };

  return (
    <>
      <S.ListagemWrapper>
        <Typography variant="h3">Listagem de alunos</Typography>

        <S.Content>
          <img src={amigos} alt="amigos" />

          <MaterialTable
            title={""}
            columns={columns}
            data={alunos}
            localization={{ ...tableTranslation }}
            options={{
              actionsColumnIndex: -1,
              emptyRowsWhenPaging: false,
              pageSize: 5,
              pageSizeOptions: [5, 10, 20],
              thirdSortClick: false,
              searchFieldVariant: "outlined",
              searchFieldStyle: {
                height: "40px",
                paddingRight: "0",
              },
              rowStyle: (rowData) => ({ backgroundColor: "#EFE8DD" }),
            }}
            components={{
              Container: ({ children }) => (
                <S.PaperStyled elevation={1}>{children}</S.PaperStyled>
              ),
            }}
            detailPanel={[
              {
                tooltip: "Detalhes do aluno",
                render: (aluno) => <Detalhes item={aluno} />,
              },
            ]}
            actions={[
              {
                tooltip: "Deletar informações do aluno",
                icon: "delete",
                onClick: (e, alunoDado) => handleClickDelete(alunoDado),
              },
              {
                tooltip: "Editar informações do aluno",
                icon: "edit",
                onClick: (e, alunoDado) => handleUpdate(alunoDado),
              },
            ]}
          />
        </S.Content>
      </S.ListagemWrapper>
      {alunoClicado && editOpen && (
        <Editar
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          alunoClicado={alunoClicado}
          setAlunos={setAlunos}
        />
      )}

      {alunoClicado && open && (
        <Confirm
          open={open}
          setOpen={setOpen}
          title="Deletar Cadastro"
          text={`Tem certeza que deseja deletar o cadastro de ${alunoClicado.aluno.nome.toUpperCase()}?`}
          functionConfirm={deletaAlunoClicado}
        />
      )}
    </>
  );
}

export default Listagem;
