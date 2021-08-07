import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getComponents,
  getUsers,
  selectUsers,
  selectComponents,
} from "../../features/api/apiSlice";

import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const components = useAppSelector(selectComponents);

  useEffect(() => {
    dispatch(getComponents());
    dispatch(getUsers());
  }, [dispatch]);

  console.log({ users, components });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
