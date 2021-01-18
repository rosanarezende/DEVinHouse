import { Typography } from "@material-ui/core"
import * as S from "./styles"

import processImg from "../../assets/process-fake.png"

function Process({ process }) {
  const { numero, descricao, assunto, interessados } = process

  return (
    <S.ProcessWrapper>
      <img alt="processo" src={processImg} />

      <div>
        <Typography variant="h3">
          Número
        </Typography>
        <Typography>
          {numero}
        </Typography>
      </div>

      <div>
        <Typography variant="h3">
          Assunto
        </Typography>
        <Typography>
          {assunto}
        </Typography>
      </div>

      <div>
        <Typography variant="h3">
          Interessado
        </Typography>
        <Typography>
          {interessados[0]}
        </Typography>
      </div>

      <div>
        <Typography variant="h3">
          Descrição
        </Typography>
        <Typography>
          {descricao}
        </Typography>
      </div>

    </S.ProcessWrapper>
  )
}

export default Process
