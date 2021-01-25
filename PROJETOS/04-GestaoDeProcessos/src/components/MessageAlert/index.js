import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MessageAlert({ alert, setAlert, message, severity}) {
  return (
    <Snackbar
      open={alert}
      autoHideDuration={6000}
      onClose={() => setAlert(false)}
    >
      <Alert onClose={() => setAlert(false)} severity={severity ? severity : "success"}>
        {message}.
      </Alert>
    </Snackbar>
  );
}

export default MessageAlert;
