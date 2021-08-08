import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getComponents,
  getUsers,
  selectUsers,
  selectComponents,
} from "../../features/api/apiSlice";
import Menu from "../Menu";
import Form from "../Form";
import Table from "../Table";

import "./App.css";

export interface City {
  id: string;
  label: string;
}

const App = () => {
  const [currentProduct, setCurrentProduct] = useState<string>("report");
  const [currentCity, setcurrentCity] = useState<City>({ id: "", label: "" });
  const [submitForm, setSubmitForm] = useState<{
    currentCity: City;
    searchValue: string;
  }>({
    currentCity: { id: "", label: "" },
    searchValue: "",
  });
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const components = useAppSelector(selectComponents);

  useEffect(() => {
    dispatch(getComponents());
    dispatch(getUsers());
  }, [dispatch]);

  const menuItems = components.data.map((component) => component.product);

  const currentProductDropdownList = components.data
    .find((component) => component.product.code === currentProduct)
    ?.children.find((child) => child.code === "dropdown")?.data;

  const filteredResult = users.data.filter(
    (user) =>
      user.ville === submitForm.currentCity.label &&
      (user.prenom
        .toLowerCase()
        .includes(submitForm.searchValue.toLowerCase()) ||
        user.nom.toLowerCase().includes(submitForm.searchValue.toLowerCase()))
  );

  if (components.status !== "idle" || users.status !== "idle")
    return <div>Loading !</div>;

  return (
    <div className="App">
      <Menu menuItems={menuItems} setCurrentProduct={setCurrentProduct} />
      <Form
        currentProductDropdownList={currentProductDropdownList}
        currentCity={currentCity}
        setcurrentCity={setcurrentCity}
        setSubmitForm={setSubmitForm}
      />
      <Table filteredResult={filteredResult} />
    </div>
  );
};

export default App;
