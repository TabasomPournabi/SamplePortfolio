import './menu.scss'

import React from 'react'

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && " active") }>
        <ul>
            <li onClick={()=>{setMenuOpen(false)}}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>{setMenuOpen(false)}}>
                <a href="#portfolio">portfolio</a>
            </li>
            <li onClick={()=>{setMenuOpen(false)}}>
                <a href="#works">works</a>
            </li>
            <li onClick={()=>{setMenuOpen(false)}}>
                <a href="#testimonials">testimonials</a>
            </li>
            <li onClick={()=>{setMenuOpen(false)}}  >
                <a href="#contac">contasn</a>
            </li>
        </ul>
    </div>
  )
}
