import React, { Fragment } from "react";
import { User } from "../../features/api/apiSlice";

interface Props {
  filteredResult: User[];
}

const Table = ({ filteredResult }: Props) => {
  if (filteredResult.length < 1) return <div>Aucun résultat !</div>;
  return (
    <table>
      {filteredResult.map((user) => (
        <Fragment key={user.id}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Ville</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Right</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.ville}</td>
              <td>{user.prenom}</td>
              <td>{user.nom}</td>
              <td>{user.right}</td>
            </tr>
          </tbody>
        </Fragment>
      ))}
    </table>
  );
};

export default Table;
