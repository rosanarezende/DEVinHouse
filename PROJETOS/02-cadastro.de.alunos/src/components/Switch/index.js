import SwitchComponent from "@material-ui/core/Switch";
import { Typography, FormLabel, FormControlLabel } from "@material-ui/core";

function Switch({ data, setData }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Autorização
      </Typography>
      <div>
        <FormLabel component="legend">
          Concede autorização de fotos e vídeos da criança para uso escolar?
        </FormLabel>
        <FormControlLabel
          label="Sim"
          control={
            <SwitchComponent
              checked={data}
              onChange={(e) => setData(e.target.checked)}
              // name="autorizacao"
            />
          }
        />
      </div>
    </>
  );
}

export default Switch;
