import {useState} from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import ChildC from './ChildC'
import Childb2 from './Childb2'

const Parent = () => {
    const [tabno, setTabno] = useState(1);
    const [data, setData] = useState({
      name:"",
      email:"", 
      number:"", 
      password:"",
      radio:"",
      select:""
    });
    const [arr, setArr] = useState([]);
    const [err, setErr] = useState({});
    const [editIndex, setEditIndex] = useState();
    const [update, setUpdate] = useState("Submit");


    const handleChange = (e) => {
      setData({...data,[e.target.name]: e.target.value})
    }


const click1 = (tab) => {
         setTabno(tab);
    setData({ name: "", email: "", number: "", password: "" });

};

  return (
    <>
    <div className='container mt-3'>
       <div className='d-flex justify-content-center gap-4'>
           <button className='btn btn-primary' onClick={() => click1(1)}>Tab1</button>
           <button className='btn btn-primary' onClick={() => click1(2)}>Tab2</button>
           <button className='btn btn-primary' onClick={() => click1(3)}>Tab3</button>
           <button className='btn btn-primary' onClick={() => click1(4)}>Tab4</button>
       </div>
    </div>
    {tabno === 1 && (
      <ChildA
      handleChange={handleChange}
      data={data}
      setData={setData}
      err={err}
      setErr={setErr}
      setTabno = {setTabno}
      arr={arr}
      update={update}
      editIndex={editIndex}
      />
    )}

    {tabno === 2 && ( 
      <ChildB
       handleChange={handleChange}
       data={data}
       arr={arr}
       setArr={setArr}
       setErr={setErr}
       setTabno = {setTabno}
       update = {update}
      />
    )}
    {tabno === 3 && (
      <Childb2
      handleChange={handleChange}
      data={data}
      setData = {setData}
      arr={arr}
      setArr={setArr}
      setTabno = {setTabno}
      update = {update}
      editIndex = {editIndex}
      setUpdate = {setUpdate}
      // setErr={setErr}
      /> 
    )}
    {tabno === 4 && (
    <ChildC
      data={data}
      setData = {setData}
      arr={arr}
      setArr={setArr}
      setTabno = {setTabno}
      setEditIndex = {setEditIndex}
      setUpdate={setUpdate}
    />
    )}
    </>
  )
}

export default Parent