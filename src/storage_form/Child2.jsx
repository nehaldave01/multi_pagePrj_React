import React from 'react'

const Child2 = ({handleChangevalue,settabnum,data, arr, setArr, editIndex, setEditIndex,setUpdate, update}) => {
 
  const submitHandle2 = (e) => {
    e.preventDefault();
    settabnum(3);
  }

  const handleClick2 = (e) => {
   let copy = [...arr]
   if(update === "Update"){
     copy[editIndex] = data
   }else{
    if(data.name.length > 0){
      copy = [...arr, data]
      }
   }
  }

  return (
    <div>

         <div className='container shadow p-3 m-5'>
        <form onSubmit={submitHandle2} className='row justify-content-between '>
             <h1>Fill your Gender</h1>
             <h3 htmlFor="" className='mt-3'>Gender</h3>

             <div className='col'>
                <label htmlFor="">Male</label>
                <input 
                type="radio"
                name='radio' 
                value="male"
                onChange={handleChangevalue}
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
                onChange={handleChangevalue}
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
                onChange={handleChangevalue}
                className='m-2'
                checked={data.radio==="other"}
                />
             </div>

                  <div>
                  <button className={`btn btn-${update === "Submit" ? "success" : "warning"} d-grid col-2 mx-auto mt-4`}
                  onClick={handleClick2}
                >{update}</button>
         </div>
      </form>
         </div>
    </div>
  )
}

export default Child2