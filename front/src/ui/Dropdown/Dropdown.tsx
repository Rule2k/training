import React, { useState } from "react";
import { City } from "../App/App";

interface Props {
  setcurrentCity: React.Dispatch<React.SetStateAction<City>>;
  currentCity: City;
  currentProductDropdownList?: {
    id: string;
    label: string;
  }[];
}

const Dropdown = ({
  setcurrentCity,
  currentCity,
  currentProductDropdownList,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentDisplayedValue =
    currentProductDropdownList?.find((item) => item.id === currentCity.id) ||
    null;

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {currentDisplayedValue?.label ?? "Sélectionnez une valeur"}
      </div>
      {isOpen &&
        currentProductDropdownList?.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setIsOpen(false);
              setcurrentCity(item);
            }}
          >
            {item.label}
          </div>
        ))}
    </>
  );
};

export default Dropdown;
