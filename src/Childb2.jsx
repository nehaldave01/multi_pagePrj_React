import React from 'react'


const Childb2 = ({setTabno,arr, data,setArr,handleChange,update,editIndex,setUpdate }) => {

    const submit3 = (e) => {
       e.preventDefault();
       
        const copy1 = [...arr,data]
        setArr(copy1)
        // console.log(copy1)

      setTabno(4)
    }

    const click4 = (e) => {
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
    <div className='container  mt-5'>
        <form className='shadow m-5 p-4' onSubmit={submit3} onChange={handleChange}>
    <select className="form-select form-select-lg mb-3" name='select' aria-label=".form-select-lg example">
  <option selected disabled>Select your city</option>
  <option value="Jaipur" onChange={handleChange}>Jaipur</option>
  <option value="Udaipur" onChange={handleChange}>Udaipur</option>
  <option value="Jodhpur" onChange={handleChange}>Jodhpur</option>
  <option value="Alwar" onChange={handleChange}>Alwar</option>
  <option value="Bikaner" onChange={handleChange}>Bikaner</option>
  <option value="Jasilmar" onChange={handleChange}>Jasilmar</option>
</select>
<button className={`btn btn-${update === "Submit" ? "primary" : "warning"} text-center d-grid col-6 mx-auto mt-4`}
       onClick = {click4}>
        {update}</button>
</form>
    </div>
  )
}

export default Childb2