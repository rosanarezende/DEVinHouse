# DEVinHouse_CRUD

CRUD desenvolvido pelos alunos do curso DEVinHouse para revisão dos assuntos das 5 primeiras semanas.

<br>

## PASSO A PASSO

<br>

### Instalar Nodejs

<br>

- Verificar se tem node instalado

    ```bash
    node -v
    ```

<br>

- Instalar node na versão mais atual LTS (*em 18 de dezembro de 2020 seria a 14*)
    - [Node.js](https://nodejs.org/en/download/package-manager/#windows)

<br>

### Criar projeto React

<br>

- Na pasta que desejamos, criar o projeto:

    ```bash
    npx create-react-app crud
    ```

<br>

- Abrir o projeto no seu editor preferido (indico o *Visual Studio Code*):

    ```bash
    code crud
    ```

<br>

- Abrir um terminal e rodar a aplicação:

    ```bash
    npm start
    ```

    *OBS: Em geral ele irá renderizar a aplicação na porta 3000 (http://localhost:3000)*

<br>


### Instalar Material-UI

<br>

Para agilizar o desenvolvimento e garantir a consistência do design, indico o uso de uma biblioteca de componentes desenvolvida para o React com base no **Material Design** (do Google :wink:)

Visite o site do Material-UI para seguir as instruções de instalação e conhecer os componentes... esse site deve permanecer aberto durante todo o desenvolvimento do projeto para consultas: (https://material-ui.com/pt/)

- Instale as bibliotecas de **componentes** e **ícones**:

    ```bash
    npm install @material-ui/core @material-ui/icons
    ```

<br>

- No projeto, entre na pasta `public`, e dentro do arquivo arquivo `index.html`, dentro do _head_ carregue a **fonte** necessária para o Material, a *Roboto*:

    ```
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    ```

<br>

### Agora sim, #partiu DESENVOLVIMENTO

<br>

Antes de criarmos nossos códigos, vamos "limpar" a aplicação, removendo conteúdos desnecessários:

- em `App.js`, apague as importações da logo e do App.css e todo o conteúdo dentro do return, substituindo-o por uma *div vazia*.
- apague os arquivos `logo.svg` e `App.css`.

<br>

Em `src` vamos criar uma pasta `pages`, onde incluiremos as páginas da nossa aplicação. 
- Nesse projeto, em especial, haverá apenas uma página, a **Home**

<br>

Em **PAGES** criaremos a pasta `Home`:


`index.js`
```javascript
import { Box, Grid, Typography } from "@material-ui/core";

function Home() {
  return (
    <Box m={4}>
      <Typography variant="h2" component="h1" align="center" gutterBottom color="textSecondary">
        CRUD dos DEVinHouse
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          {/* Aqui vai nosso cadastro */}
        </Grid>

        <Grid item xs={12} sm={8}>
          {/* Aqui vai nossa listagem */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
```

<br>

Para organizar nosso código, em `src` vamos criar uma pasta `containers`, onde incluiremos partes do código que são grandes, mas não o suficiente para ser uma página. 
- Nesse projeto haverá 2 containers: **Cadastro** e **Listagem**.

<br>

Em **CONTAINERS** criaremos a pasta `Cadastro`:

`index.js`
```javascript
import "./index.css";
import { Box, Paper, Typography, TextField, Button } from "@material-ui/core";

function Cadastro() {
  return (
    <Box component={Paper} p={2}>
      <Typography variant="h4" component="h2" gutterBottom color="primary">
        Cadastro
      </Typography>
      <Box component="form">
        <TextField variant="outlined" size="small" label="Nome" fullWidth margin="dense"/>
        <TextField variant="outlined" size="small" label="Sobrenome" fullWidth margin="dense"/>
        <Box className="button-wrapper">
          <Button variant="contained" color="primary">Salvar</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Cadastro;
```

`index.css`
```css
.button-wrapper{
  display: flex;
  justify-content: center;
  padding: 10px 0 0;
}
```

*OBS: Por enquanto não nos preocupamos com a lógica, mas tão somente com a parte visual da aplicação.*

<br>

Em **CONTAINERS** criaremos também a pasta `Listagem`:

`index.js`
```javascript
import "./index.css";
import { Box, Paper, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

// vamos criar uma linha, apenas para visualizar a renderização na tela
const linhas = [{ id: 1, nome: "Fulana", sobrenome: "de Tal" }];

function Listagem() {
  return (
    <Box component={Paper} p={2}>
      <Typography variant="h4" component="h2" gutterBottom color="primary">
        Listagem
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">NOME</TableCell>
            <TableCell align="center">SOBRENOME</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {linhas.map((linha) => (
            <TableRow key={linha.id}>
              <TableCell align="center">{linha.nome}</TableCell>
              <TableCell align="center">{linha.sobrenome}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="primary" style={{ marginRight: "10px" }} startIcon={<Edit />}>
                  Editar
                </Button>
                <Button variant="contained" color="secondary" startIcon={<Delete />}>
                  Deletar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Listagem;
```

<br>

Esse é o resultado da nossa aplicação até o momento:

<div align="center">
  <img  src='https://user-images.githubusercontent.com/45580434/102692448-0499a000-41f2-11eb-98fa-e7ae15921f27.png' alt="crud">
</div><br>

### Vamos "dar vida" a essa aplicação :neckbeard:

<br>

Como não estamos usando Redux ou qualquer estrutura de gerenciamento "global de estados", prefiro colocar nosso estado no componente pai, que no nosso caso é a página Home, e ir mandando pros filhos as props que eles precisam... vamos lá.

<br>

Em `scr/pages/Home/index.js`, teremos:

```javascript
import { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import Cadastro from "../../containers/Cadastro";
import Listagem from "../../containers/Listagem";

function Home() {
  const [pessoa, setPessoa] = useState({ nome: "", sobrenome: "" });
  const [pessoas, setPessoas] = useState([]);

  return (
    <Box m={4}>
      <Typography variant="h2" component="h1" align="center" gutterBottom color="textSecondary">
        CRUD dos DEVinHouse
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Cadastro pessoa={pessoa} setPessoa={setPessoa} pessoas={pessoas} setPessoas={setPessoas}/>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Listagem setPessoa={setPessoa} pessoas={pessoas} setPessoas={setPessoas}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
```

<br>

Em `scr/containers/Cadastro/index.js`, teremos:

```javascript
import "./index.css";
import { Box, Paper, Typography, TextField, Button } from "@material-ui/core";

function Cadastro(props) {
  const { pessoa, setPessoa, pessoas, setPessoas } = props;

  const handleChange = ({ name, value }) => {
    setPessoa({ ...pessoa, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pessoaNaLista = pessoas.some((item) => item.id === pessoa.id);
    if (pessoaNaLista) {
      const result = pessoas.map((item) => item.id === pessoa.id ? pessoa : item);
      setPessoas(result);
    } else {
      setPessoas([ ...pessoas, { ...pessoa, id: Math.random().toString(36).substr(2, 9) } ]);
    }
    setPessoa({ id: 0, nome: "", sobrenome: "" });
  };

  return (
    <Box component={Paper} p={2}>
      <Typography variant="h4" component="h2" gutterBottom color="primary">
        Cadastro
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          required fullWidth margin="dense" variant="outlined" size="small" 
          label="Nome" name="nome" value={pessoa.nome} onChange={(e) => handleChange(e.target)}
        />
        <TextField
          required fullWidth margin="dense" variant="outlined" size="small"
          label="Sobrenome" name="sobrenome" value={pessoa.sobrenome} onChange={(e) => handleChange(e.target)}
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
```

<br>

Em `scr/containers/Listagem/index.js`, teremos:

```javascript
import { Box, Paper, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

function Listagem(props) {
  const { setPessoa, pessoas, setPessoas } = props;

  const handleEdit = (id) => {
    const pessoaClicada = pessoas.find((pessoa) => pessoa.id === id);
    setPessoa(pessoaClicada);
  };

  const handleDelete = (id) => {
    const result = pessoas.filter((pessoa) => pessoa.id !== id);
    setPessoas(result);
  };

  return (
    <Box component={Paper} p={2}>
      <Typography variant="h4" component="h2" gutterBottom color="primary">
        Listagem
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">NOME</TableCell>
            <TableCell align="center">SOBRENOME</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pessoas.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="center">{item.nome}</TableCell>
              <TableCell align="center">{item.sobrenome}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="primary" style={{ marginRight: "10px" }} startIcon={<Edit />} onClick={() => handleEdit(item.id)}>
                  Editar
                </Button>
                <Button variant="contained" color="secondary" startIcon={<Delete />} onClick={() => handleDelete(item.id)}>
                  Deletar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Listagem;
```

<br>

### Finalmente, vamos expor nosso projeto na web (deploy com SURGE)

<br>

- Primeiro "buildamos" o projeto

    ```
    npm run build
    ```

<br>

- Dica: sempre criar um arquivo 202.html para poder usar subrotas

    ```
    cp build/index.html build/200.html
    ```

<br>

Usaremos o [Surge.sh](https://surge.sh/)

- Instalar o surge globalmente:

    ```
    npm install -g surge
    ```

<br>

- Rodar o surge e seguir os passos solicitados no terminal:

    ```
    surge ./build
    ```

<br>

### E o passo mais importante: Comemorar!!!

<br>

<div align="center">
  <img  src='https://sorridents.com.br/wp-content/uploads/2016/01/12.gif' alt="comemorar">
</div><br>
