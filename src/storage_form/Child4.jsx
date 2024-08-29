import React, { useEffect } from 'react'
import { MdDelete, MdEdit } from "react-icons/md";


const Child4 = ({data, setArr, arr, setData, settabnum, setarr, editIndex, setEditIndex,setUpdate, update}) => {

  const deleterow = (index) => {
    let copy = [...arr];
    copy.splice(index,1)
    localStorage.setItem("copy",JSON.stringify(copy));
  }

  const editrow = (e,i) => {
    setEditIndex(i);
    settabnum(1)
    setData(e); 
    setUpdate("Update");
  }

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("copy")) || []
    setArr(a)
 },[arr])

  return (
    <div>
      <table class="table m-5">
  <thead>
    <tr>
      <th scope="col">Serial Number</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope='col'>Password</th>
      <th scope='col'>Gender</th>
      <th scope='col'>City</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {
       arr.map((e,i) => {
      return(
      <tr key={i}>
      <th scope="row" >{i+1}</th>
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{e.number}</td>
      <td>{e.password}</td>
      <td>{e.radio}</td>
      <td>{e.select}</td>
      <th>
         <MdDelete onClick={() => deleterow(i)}/>
         <MdEdit onClick={() => editrow(e, i)}/>
      </th>
       </tr>
        )
       })
    }
    
    
  </tbody>
</table>
    </div>
  )
}

export default Child4