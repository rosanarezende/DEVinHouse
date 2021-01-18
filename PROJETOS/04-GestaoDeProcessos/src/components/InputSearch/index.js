import { useDispatch, useSelector } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import { InputBase, IconButton } from "@material-ui/core";
import * as S from "./styles";

import { getInputSearch } from "../../redux/selectors";
import { setInputSearch } from "../../redux/actions";

function InputSearch({ inputClick, inconClick, marginInput }) {
  const dispatch = useDispatch();
  const inputSearch = useSelector(getInputSearch);

  const handleIputClick = (e) => {
    inputClick && inputClick()
  };

  const handleIconClick = (e) => {
    e.preventDefault()
    inconClick && inconClick()
  };

  return (
    <S.PaperStyled component="form" margininput={marginInput}>
      <InputBase
        className="inputBase"
        placeholder="Pesquise por uma informação do processo"
        value={inputSearch || ""}
        onChange={(e) => dispatch(setInputSearch(e.target.value))}
        onClick={handleIputClick}
      />

      <IconButton
        type="submit"
        className="iconButton"
        onClick={handleIconClick}
      >
        <SearchIcon />
      </IconButton>
    </S.PaperStyled>
  );
}

export default InputSearch;
