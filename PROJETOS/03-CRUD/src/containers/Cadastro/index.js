import "./index.css";
import { Box, Paper, Typography, TextField, Button } from "@material-ui/core";

function Cadastro({ pessoa, setPessoa, pessoas, setPessoas }) {
  // const { pessoa, setPessoa, pessoas, setPessoas } = props;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setPessoa((pessoa) => ({ ...pessoa, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setPessoas(pessoas.push(pessoa));
    setPessoas([
      ...pessoas,
      {
        ...pessoa,
        id: Math.random().toString(36).substr(2, 9),
      },
    ]);
    setPessoa({
      id: 0,
      nome: "",
      sobrenome: "",
    });
  };

  return (
    <Box component={Paper} p={2}>
      <Typography component="h2" variant="h4" color="primary" gutterBottom>
        Cadastro
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          variant="outlined"
          size="small"
          margin="dense"
          label="Nome"
          value={pessoa.nome}
          name="nome"
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          variant="outlined"
          size="small"
          margin="dense"
          label="Sobrenome"
          name="sobrenome"
          value={pessoa.sobrenome}
          onChange={handleChange}
        />
        <Box className="button-wrapper">
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Cadastro;
