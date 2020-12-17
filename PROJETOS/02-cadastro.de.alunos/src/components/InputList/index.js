import * as S from "./styles";
import { TextField, MenuItem, Button, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function InputList({ data, setData, internData }) {
  const adicionaCampoAutorizado = () => {
    setData([...data, { autorizadoNome: "", autorizadoVinculo: "" }]);
  };

  const removeCampoAutorizado = (position) => {
    var filtered = data.filter((value, index) => position !== index);
    setData(filtered);
  };

  const adicionaPessoaAutorizada = (position, field, value) => {
    const updatedItems = data.map((autorizado, index) => {
      return index === position
        ? { ...autorizado, [field]: value }
        : autorizado;
    });
    setData(updatedItems);
  };

  return (
    <S.InputListWrapper>
      <div id="autorizados">
        <Typography variant="h5">
          Pessoas autorizadas a buscar a criança
        </Typography>
        {data.map((autorizado, index) => (
          <div key={index} id="autorizado">
            <S.CloseIcon onClick={() => removeCampoAutorizado(index)}>
              <Close />
            </S.CloseIcon>

            <div id="inputs">
              {internData.map((item, i) => (
                <TextField
                  required
                  key={i}
                  variant="outlined"
                  size="small"
                  margin="dense"
                  className={item.className}
                  helperText={item.helper}
                  type={item.type}
                  name={item.name}
                  label={item.label}
                  value={autorizado[item.name] || ""}
                  onChange={(e) =>
                    adicionaPessoaAutorizada(index, item.name, e.target.value)
                  }
                  select={item.select}
                >
                  {item.select &&
                    item.data.map((option) => (
                      <MenuItem
                        style={{ justifyContent: "center" }}
                        key={option.id}
                        value={option.name}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                </TextField>
              ))}
            </div>
          </div>
        ))}
        <div id="adicionar">
          <Button
            color="primary"
            variant="outlined"
            onClick={adicionaCampoAutorizado}
          >
            + autorizado
          </Button>
        </div>
      </div>
    </S.InputListWrapper>
  );
}

export default InputList;
