import React from 'react'
import AboutMe from '../assets/aboutme.jpeg'
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop' 
        style={{backgroundImage: `url(${AboutMe})`}}>
          <h1>ABOUT ME</h1>
        </div>
        <div className='aboutBottom'>
            <p>
            Ambitious and hardworking student at the University of Wisconsin-Madison pursuing a degree in computer science 
            alongside a certificate in general business. Passionate about leveraging analytical and problem solving skills 
            in a software engineering environment in order to increase the productivity and efficiency of a company. 
            Possesses strong collaborative and communication skills necessary to effectively work in groups to break down and solve problems.
            I am currently living in New Jersey and able to work in the NJ/NYC area. I am also willing to work remotely if necessary.
            </p>
            </div>
    </div>
  )
}

export default About
