// import { useState } from "react";
import MaterialTable from "material-table";

import amigos from "../../../assets/amigos.svg";

import { tableTranslation, columns } from "./constants";

// import { deleteItem, updateItem } from '../../actions';

import { Typography } from "@material-ui/core";
import * as S from "./styles";

import Detalhes from "./Detalhes";

function Listagem({ alunos }) {
  // const [rows, setRows] = useState([]);

  // const handleClose = () => {
  //   // setOpen(false);
  // };

  const handleClickDelete = (alunoDado) => {
    console.log("cliquei deletar", alunoDado);
    // setRows(rowsData);
    // setOpen(true);
  };

  const handleUpdate = (newData, oldData) => {
    console.log("cliquei editar", newData, oldData);
    // if (oldData) {
    //   const dataFormatted = {
    //     ...newData,
    //     dg_created_at: newData.dg_created_at,
    //     dg_updated_at: new Date().getTime(),
    //   };
    //   updateItem(dataFormatted, path, setAllCredentials);
    // }
  };

  return (
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
            rowStyle: (rowData) => ({ backgroundColor: '#EFE8DD' }),
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
          ]}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                handleUpdate(newData, oldData);
                resolve();
              }),
          }}
        />
      </S.Content>
    </S.ListagemWrapper>
  );
}

export default Listagem;
