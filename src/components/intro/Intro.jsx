import React from 'react'
import './intro.scss'
import  {init} from 'ityped'   // npm install ityped
import { useEffect,useRef  } from 'react'




export default function Intro() {

const textRef=useRef()

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: false, 
      backDelay:1500,
      backSpeed:60,
      showCursor:true, 
      strings:['Developer', 'Yeah!' ] })
   
  },[])
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there , i'm</h2>
          <h1>Tabassom Pournabi</h1>
          <h3>Junior <span ref={textRef}> </span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png " alt="" />
        </a>
      </div>
    </div>
  )
}
