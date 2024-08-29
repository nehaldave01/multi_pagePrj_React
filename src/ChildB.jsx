import React from 'react'

const ChildB = ({handleChange,arr,setArr, data,setTabno,update,editIndex,setUpdate}) => {

    const submit2 = (e) => {
      e.preventDefault();
       setTabno(3)
    }
    

    // const validation2 = () => {
    //   let localErr1 = {}
    //   let status2 = true;

    //   if(!data2.radio){
    //      localErr1.radio = "Select the gender";
    //      status2 = false;
    //   }

    //   setErr1(localErr1)
    //   return status2;
    // }
    const click3 = (e) => {
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

  return (
    <>
      <div className='container w-25 shadow p-3 mt-5' >
        <label htmlFor="" className="fw-semibold m-1">
            Gender
        </label>
        <form className='row justify-content-around mb-2' onSubmit={submit2}>
           <div className='col'>
                <label htmlFor="">Male</label>
                <input 
                type="radio"
                name='radio'
                value="male"
                onChange={handleChange}
                className='m-2'
                checked={data.radio==="male"}
                 />
           </div>

           <div className='col'>
                <label htmlFor="">Female</label>
                <input 
                type="radio"
                name='radio'
                value="female"
                onChange={handleChange}
                className='m-2'
                checked={data.radio==="female"}

                 />
           </div>

           <div className='col'>
                <label htmlFor="">Other</label>
                <input 
                type="radio"
                name='radio'
                value="other"
                onChange={handleChange}
                className='m-2'
                checked={data.radio==="other"}

                 />
           </div>


           <button className={`btn btn-${update === "Submit" ? "primary" : "warning"} text-center d-grid col-6 mx-auto mt-4`}
                     onClick = {click3}>
                     {update}
                     </button>

        </form>
           {/* {err1.radio && <p>{err1.radio}</p>} */}
      </div>  
    </>
  )
}

export default ChildB