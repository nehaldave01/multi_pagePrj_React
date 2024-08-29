import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ChildC = ({ arr, setArr, data, setData, setTabno, setEditIndex, setUpdate}) => {
  
  const deleterow = (index) => {
    let copy = [...arr];
    copy.splice(index, 1);
    setArr(copy);
  };

  const editrow = (e,i) => {
  setTabno(1)
    setEditIndex(i);
    setData(e); 
    setUpdate("Update");
  };

  

  return (
    <div>
      <table className="table m-5">
        <thead>
          <tr>
            <th scope="col">Serial Number</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Password</th>
            <th scope="col">Gender</th>
            <th scope="col">City</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.number}</td>
                <td>{e.password}</td>
                <th>{e.radio}</th>
                <th>{e.select}</th>
                <th>
                  <MdDelete onClick={() => deleterow(i)}/>
                  <MdEdit onClick={() => editrow(e, i)}/>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ChildC;
