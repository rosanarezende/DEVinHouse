import * as S from "./styles";
import {
  Typography,
  FormLabel,
  FormControlLabel,
  TextField,
  Switch,
} from "@material-ui/core";

function ConditionalSwitch({
  switchData,
  setSwitchData,
  inputData,
  setInputData,
}) {
  return (
    <S.ConditionalSwitchWrapper>
      <Typography variant="h5" gutterBottom>
        Restrições alimentares
      </Typography>
      <div id="inputs">
        <div className="quarenta" id="restricao">
          <FormLabel component="legend">
            A criança possui restrição alimentar?
          </FormLabel>
          <FormControlLabel
            control={
              <Switch
                checked={switchData}
                onChange={(e) => setSwitchData(e.target.checked)}
                name="restricao"
              />
            }
            label="Sim"
          />
        </div>

        {switchData && (
          <TextField
            // required
            variant="outlined"
            multiline
            rows={3}
            size="small"
            margin="dense"
            className="sessenta"
            type="text"
            label="Descrição das restrições alimentares"
            value={inputData || ""}
            onChange={(e) => setInputData(e.target.value)}
          />
        )}
      </div>
    </S.ConditionalSwitchWrapper>
  );
}

export default ConditionalSwitch;
