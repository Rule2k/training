import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { inputChange } from "../../features/search/searchSlice";

interface Props {
  searchValue: string;
}

const Search = ({ searchValue }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <input
      onChange={(event) => dispatch(inputChange(event.target.value))}
      value={searchValue}
    />
  );
};

export default Search;
