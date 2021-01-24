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

function NewProcess({ open, setOpen, processToEdit }) {
  
  const saveProcess = () => {
    setOpen(false);
    // colocar a lógica de criação ou edição de processo
  };

  return (
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
          <TextField color="secondary" value={processToEdit?.assunto || ""} />
        </div>

        <Typography variant="body2">Interessados</Typography>
        <div>
          {processToEdit?.interessados?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </div>
        {/* <div>xxx</div> */}

        <Typography variant="body2">Novo Interessado</Typography>
        <div>
          <TextField color="secondary" />
          {/* vou ter q fazer uma lógica pra adicionar, quando for novo... 
          pq ainda não tô batendo na API e uma pra editar, batendo direto na API */}
          <Button variant="contained" color="secondary">
            Adicionar
          </Button>
        </div>

        <Typography variant="body2">Descrição</Typography>
        <TextField color="secondary" multiline value={processToEdit?.descricao || ""}/>

        <DialogActions>
          <Button onClick={saveProcess} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </DialogContentStyled>
    </Dialog>
  );
}

export default NewProcess;
