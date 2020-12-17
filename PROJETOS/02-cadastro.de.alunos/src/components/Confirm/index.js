import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

function Confirm({ open, setOpen, title = "", text, functionConfirm }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} keepMounted onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Não
        </Button>
        <Button onClick={functionConfirm} color="primary">
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Confirm;
