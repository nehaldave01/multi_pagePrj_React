import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'

const Parent2 = () => {
  const [data, setData] = useState({name:"", email:"", number:"", password:"", radio:"", select:""});
  const [arr, setArr] = useState([]);
  const [tabnum, settabnum] = useState(1)
  const [editIndex, setEditIndex] = useState("")
  const [update, setUpdate] = useState("Submit")
  const [err, setErr] = useState({});


  const handleChangevalue = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const click1 = (tab) => {
    settabnum(tab)
    setData({ name: "", email: "", number: "", password: "" });
  }

  return (
    <div className='container m-5'>
      <div className='d-flex justify-content-center gap-4'>
         <button onClick={() => click1(1)} className='btn btn-primary'>Tab1</button>
         <button onClick={() => click1(2)} className='btn btn-primary'>Tab2</button>
         <button onClick={() => click1(3)} className='btn btn-primary'>Tab3</button>
         <button onClick={() => click1(4)} className='btn btn-primary'>Tab4</button>
      </div>

      {tabnum === 1 && (
       <Child1
       data={data}
       handleChangevalue={handleChangevalue}
       settabnum = {settabnum}
       setArr={setArr}
       arr={arr}
       editIndex={editIndex}
       setEditIndex={setEditIndex}
       update={update}
       setUpdate={setUpdate}
       err={err}
       setErr={setErr}/>
      )}

      {tabnum === 2 && (
      <Child2
      settabnum = {settabnum}
      handleChangevalue={handleChangevalue}
      data={data}
      setArr={setArr}
      arr={arr}
       editIndex={editIndex}
       setEditIndex={setEditIndex}
       update={update}
       setUpdate={setUpdate}
       setErr={setErr}/>
    )}
    { tabnum === 3 && (
      <Child3
      settabnum = {settabnum}
      handleChangevalue={handleChangevalue}
      data={data}
      setArr={setArr}
      arr={arr}
       editIndex={editIndex}
       setEditIndex={setEditIndex}
       update={update}
       setUpdate={setUpdate}/>
    )}
    { tabnum === 4 && (
      <Child4
      settabnum = {settabnum}
      handleChangevalue={handleChangevalue}
      data={data}
      setData = {setData}
      setArr={setArr}
       arr={arr}
       editIndex={editIndex}
       setEditIndex={setEditIndex}
       update={update}
       setUpdate={setUpdate}/> 
    )}

    </div>
  )
}

export default Parent2