import React,{useState} from 'react'

function Func_state() {

    const [number,setNumber]=useState(1)

    const [data,setData]=useState({
        name:"K Patel",
        age:"23",
        number:1,
        isImage:true
    })
  return (
    <div className='container mt-5'>
        <button onClick={()=>setNumber(number+1)}>Increment</button>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number-1)}>Decrement</button>

    </div>
  )
}

export default Func_state