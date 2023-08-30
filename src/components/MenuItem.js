import React from 'react'
import '../styles/Menu.css'

function MenuItem({ image, name, link }) {
  return (
    <a href= {link}>
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name}</h1>
        <p> {link} </p>
    </div>
    </a>
  );
}

export default MenuItem
