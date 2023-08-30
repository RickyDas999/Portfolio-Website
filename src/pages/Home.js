import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/codingbackground.avif'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div 
        className='headerContainer' 
        >
        <h1 className='title'> SUBHAM (RICKY) DAS </h1>
        <p className='title'> ASPIRING SOFTWARE ENGINEER </p>
        <Link to="/projects">
          <button> FIND PROJECTS </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
