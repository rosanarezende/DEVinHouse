import { useState } from "react";
import "./index.css";
import { Box, Typography, Grid } from "@material-ui/core";
import Cadastro from "../../containers/Cadastro";
import Listagem from "../../containers/Listagem";

function Home() {
  const [pessoas, setPessoas] = useState([]);
  const [pessoa, setPessoa] = useState({
    id: 0,
    nome: "",
    sobrenome: "",
  });

  return (
    <Box m={2}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        color="textSecondary"
        align="center"
        className="typography"
        // style={{
        //   marginTop: "20px",
        // }}
      >
        CRUD dos DEVinHouse
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Cadastro
            pessoa={pessoa}
            setPessoa={setPessoa}
            pessoas={pessoas}
            setPessoas={setPessoas}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Listagem pessoas={pessoas} setPessoas={setPessoas} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
