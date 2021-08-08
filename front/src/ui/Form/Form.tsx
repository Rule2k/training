import React from "react";
import Search from "../Search";
import Dropdown from "../Dropdown";
import { useAppSelector } from "../../app/hooks";
import { selectSearchValue } from "../../features/search/searchSlice";
import { City } from "../App/App";

interface Props {
  currentProductDropdownList?: {
    id: string;
    label: string;
  }[];
  setcurrentCity: React.Dispatch<React.SetStateAction<City>>;
  currentCity: City;
  setSubmitForm: React.Dispatch<
    React.SetStateAction<{
      currentCity: City;
      searchValue: string;
    }>
  >;
}

const Form = ({
  currentProductDropdownList,
  setcurrentCity,
  currentCity,
  setSubmitForm,
}: Props) => {
  const searchValue = useAppSelector(selectSearchValue);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitForm({
      currentCity,
      searchValue,
    });
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Search searchValue={searchValue} />
      <Dropdown
        setcurrentCity={setcurrentCity}
        currentCity={currentCity}
        currentProductDropdownList={currentProductDropdownList}
      />
    </form>
  );
};

export default Form;
