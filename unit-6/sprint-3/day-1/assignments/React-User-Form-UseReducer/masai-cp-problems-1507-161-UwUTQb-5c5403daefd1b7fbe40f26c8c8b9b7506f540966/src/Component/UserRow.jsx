import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  console.log(maritalStatus);
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{role}</td>
      {maritalStatus ? <td>married</td> : <td>unmarried</td>}
    </tr>
  );
};
export { UserRow };
