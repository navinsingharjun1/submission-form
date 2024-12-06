import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Status from './Status/Status'
import './index.css'
import Inprogress from './Inprogress/Inprogress'
import Pending from './Pending/Pending'
import Completed from './Completed/Completed'



function App() {
  const[Todo, setTodo] = useState({
    Inprogress:[],
    Pending:[],
    Completed:[]
  })
 const[selectedvalue, setselectedvalue] = useState("")
 const[inputstate, setinputstate] = useState(" ")

  const handlechange = (event) => {
    setselectedvalue(event.target.value)
  }

  // const handleinput = (event) => {
  //   setTodo(event.target.value)
  // }

  // const handleinput = (event) => {
  //   setTodo ((prevstate) => ({
  //     ...prevstate, 
  //     [selectedvalue]:event.target.value,
  //   }));
  // };

  const handleinput = (event) => {
    setinputstate(event.target.value)
  }

  const handlesubmit=(event) => {
     event.preventDefault();
    setTodo((prevstate) => ({
        ...prevstate,
        [selectedvalue]:[prevstate[selectedvalue], inputstate]
    }))
  }

  console.log(">>", Todo)

  return (
    <>
    <div>
      <form onSubmit={handlesubmit}>
      <input type='text' placeholder='Input Todo' onChange={handleinput}/>
      <button type='submit'> Submit </button>
      </form>
      <h4> Status: {selectedvalue}</h4>
      <select onChange={handlechange}>
        <option value={"inprogress"}> Inprogress</option>
        <option value={"pending"}> Pending </option>
        <option value={"completed"}> Completed </option>
      </select>
    </div>
    <Status Todo={ Todo} selectedvalue={selectedvalue}  />
    </>
  )
}

export default App
