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

function NewProcess({ open, setOpen }) {
  
  const createProcess = () => {
    setOpen(false);
    // colocar a lógica de criação de processo
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
      <DialogTitle style={{ padding: "16px 20px 0"}}>Cadastro de processo</DialogTitle>

      <DialogContentStyled>
        <Typography variant="body2">Assunto</Typography>
        <div>
          <TextField color="secondary" />
        </div>

        <Typography variant="body2">Interessados</Typography>
        <div>xxx</div>

        <Typography variant="body2">Novo Interessado</Typography>
        <div>
          <TextField color="secondary" />
          <Button variant="contained" color="secondary">
            Adicionar
          </Button>
        </div>

        <Typography variant="body2">Descrição</Typography>
        <TextField color="secondary" multiline/>

        <DialogActions>
          <Button onClick={createProcess} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>

      </DialogContentStyled>
    </Dialog>
  );
}

export default NewProcess;
