import React from 'react'
import { useState } from 'react'
import './contac.scss'

export default function Contac() {
  const [message,setMessage]=useState(false)
  const [val, setVal] = useState();

  const handleSubmit=(e)=>{
    e.preventDefault()
    setMessage(true)
 
  
}

  return (
    <div className='contac' id='contac'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email'
         value={val}
          />
          <textarea placeholder='Message' 
>
           </textarea>
          <button type='submit'  onClick={() => setVal(() => "")}>Send</button>
          {message && <span> Tanks, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  )
}
