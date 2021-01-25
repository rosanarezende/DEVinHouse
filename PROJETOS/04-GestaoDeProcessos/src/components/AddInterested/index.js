import { Typography, Button, TextField } from "@material-ui/core";

function AddInterested({
  inputs,
  setInputs,
  tempInterested,
  setTempInterested,
}) {
  const addInterested = () => {
    if (tempInterested !== "") {
      setInputs({
        ...inputs,
        interessados: [...inputs.interessados, tempInterested],
      });
      setTempInterested("");
    }
  };

  return (
    <>
      <Typography variant="body2">Interessados</Typography>
      <div>
        {inputs.interessados?.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
      </div>

      <Typography variant="body2">Novo Interessado</Typography>
      <div>
        <TextField
          color="secondary"
          name="tempInterested"
          value={tempInterested}
          onChange={(e) => setTempInterested(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={addInterested}>
          Adicionar
        </Button>
      </div>
    </>
  );
}

export default AddInterested;
