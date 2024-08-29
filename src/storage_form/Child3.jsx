import React from 'react'

const Child3 = ({settabnum, data, handleChangevalue, arr, setArr, editIndex, setEditIndex,setUpdate, update}) => {

const submitHandle3 = (e) => {
   e.preventDefault();
   settabnum(4)
}

const handleClick3 = () => {
  let copy = [...arr]
  if(update === "Update"){
    copy[editIndex] = data
  }else{
     if(data.name.length > 0){
        copy = [...arr, data]
     }
  }

  localStorage.setItem("copy", JSON.stringify(copy));
  console.log(copy)
  // setArr(copy)
}



  return (
    <div className='container  mt-5'>
        <form className='shadow m-5 p-4' onSubmit={submitHandle3} onChange={handleChangevalue}>
    <select className="form-select form-select-lg mb-3" name='select' aria-label=".form-select-lg example">
  <option selected disabled>Select your city</option>
  <option value="Jaipur" onChange={handleChangevalue}>Jaipur</option>
  <option value="Udaipur" onChange={handleChangevalue}>Udaipur</option>
  <option value="Jodhpur" onChange={handleChangevalue}>Jodhpur</option>
  <option value="Alwar" onChange={handleChangevalue}>Alwar</option>
  <option value="Bikaner" onChange={handleChangevalue}>Bikaner</option>
  <option value="Jasilmar" onChange={handleChangevalue}>Jasilmar</option>
</select>
<button className={`btn btn-${update === "Submit" ? "success" : "warning"} d-grid col-2 mx-auto mt-4`}
        onClick={handleClick3}
>{update}</button>

</form>
    </div>
  )
}

export default Child3