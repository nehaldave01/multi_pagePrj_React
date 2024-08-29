import React from 'react'

const Child1 = ({data,handleChangevalue,settabnum, arr, setArr, setErr, err,editIndex, setEditIndex,setUpdate, update}) => {

  const submitHandle = (e) => {
    e.preventDefault();
    if(validation()){
      settabnum(2)
     }
  }

  const handleClick = (e) => {
     let copy = [...arr]
     if(update === "Update"){
       copy[editIndex] = data
     }else{
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
      <div className='container shadow p-3 m-5'>
        <h2>Please Fill the required details</h2>
          <form onSubmit = {submitHandle}>

            <div>
             <label htmlFor="" className='m-2'>Name</label>
                  <input type="text" 
                         className='form-control'
                         name='name'
                         value={data.name}
                         onChange={handleChangevalue}
                         placeholder='Enter name here'
                         style={{outline:"none"}} />
              </div>
              {err.name && <p>{err.name}</p>}
                <div>
                <label htmlFor="" className='m-2'>Email</label>
                  <input type="text" 
                         className='form-control'
                         name='email'
                         value={data.email}
                         onChange={handleChangevalue}
                         placeholder='Enter email address'
                         style={{ outline:"none"}} />
                </div>
              {err.email && <p>{err.email}</p>}
               

                <div>
                <label htmlFor="" className='m-2'>Phone Number</label>
                  <input type="text" 
                         className='form-control'
                         name='number'
                         value={data.number}
                         onChange={handleChangevalue}
                         placeholder='Enter phone number'
                         style={{ outline:"none"}} />
                </div>
                {err.number && <p>{err.number}</p>}

                <div>
                <label htmlFor="" className='m-2'>Password</label>
                  <input type="text" 
                         className='form-control'
                         name='password'
                         value={data.password}
                         onChange={handleChangevalue}
                         placeholder='Enter password'
                         style={{ outline:"none"}} />
                </div>
                {err.password && <p>{err.password}</p>}

                <button className={`btn btn-${update === "Submit" ? "success" : "warning"} d-grid col-2 mx-auto mt-4`}
                  onClick={handleClick}
                >{update}</button>
          </form>
      </div>
    </>
  )
}

export default Child1 