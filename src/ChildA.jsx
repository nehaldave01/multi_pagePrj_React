import React from 'react'

const ChildA = ({handleChange, data,setData, arr,err,setErr,setTabno,update,setUpdate,editIndex}) => {

    const submit1 = (e) => {
       e.preventDefault();
       if(validation()){

        setTabno(2)
       }
    }

    const click2 = (e) => {
        let copy = [...arr]
        if(update === "Update"){
            copy[editIndex] = data;
            // setUpdate("Submit");
        } else {
            if(data.name.length > 0){
                copy = [...arr, data]
            }
        }
    }

  const validation = () => {
    let localErr = {};
    let status = true;

    if(data.name.length === 0){
       localErr.name = "name is required";
       status = false;
    }
    if(data.email.length === 0){
        localErr.email = "email is required";
        status = false;
    }
    if(data.number.length === 0){
        localErr.number = "number is required";
        status = false;
    }
    if(data.password.length === 0){
        localErr.password = "password is required";
        status = false;
    }

    setErr(localErr)
    return status;
  }

  return (
    <>
    <div className='container w-25 shadow p-3 mt-5'>
       <form onSubmit={submit1}>
            <div>
                <label className='m-2'>Name:</label>
                <input type="text"
                className='form-control' 
                name='name' 
                value={data.name}
                onChange={handleChange}
                placeholder='Enter name here' 
                style={{width:"330px", outline:"none"}}/>
            </div>
                {err.name && <p>{err.name}</p>}
            <div>
               <label className='m-2'>Email:</label>
                <input type="text" 
                className='form-control' 
                name='email' 
                value={data.email}
                onChange={handleChange}
                placeholder='Enter email ' 
                style={{width:"330px", outline:"none"}}/>
            </div>
            {err.email && <p>{err.email}</p>}

            <div>
               <label className='m-2'>Phone Number:</label>
                <input type="text" 
                className='form-control' 
                name='number' 
                value={data.number}
                onChange={handleChange}
                placeholder='Enter phonenumber ' 
                style={{width:"330px", outline:"none"}}/>
            </div>
            {err.number && <p>{err.number}</p>}
            <div>
               <label className='m-2'>Password:</label>
                <input type="text" 
                className='form-control' 
                name='password' 
                value={data.password}
                onChange={handleChange}
                placeholder='Enter password' 
                style={{width:"330px", outline:"none"}}/>
            </div>
            {err.password && <p>{err.password}</p>}

            <button className={`btn btn-${update === "Submit" ? "primary" : "warning"} text-center d-grid col-6 mx-auto mt-4`}
                     onClick = {click2}>
                     {update}
                     </button>
       </form>
    </div>
    </>
  )
}

export default ChildA