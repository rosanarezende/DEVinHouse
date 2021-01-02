import * as S from "./styles";
import { TextField, Typography, MenuItem } from "@material-ui/core";

function Inputs({ data, input, changeInput }) {
  return (
    <S.InputsWrapper>
      {data.map((item, index) => (
        <div key={index} id={item.top && "top"} className={item.className}>
          {item.top && <Typography variant="h5">{item.top}</Typography>}
          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            helperText={item.helper}
            type={item.type}
            name={item.name}
            label={item.label}
            value={input[item.name] || ""}
            onChange={changeInput}
            select={item.select}
            InputLabelProps={{
              shrink: item.shrink,
            }}
            InputProps={{
              inputProps: {
                max: item.max,
                pattern: item.pattern,
                title: item.title,
                style: {
                  textAlign: "center",
                },
              },
            }}
          >
            {item.select &&
              item.data.map((option) => (
                <MenuItem
                  style={{
                    justifyContent: "center",
                  }}
                  key={option.id}
                  value={option.name}
                >
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
        </div>
      ))}
    </S.InputsWrapper>
  );
}

export default Inputs;
