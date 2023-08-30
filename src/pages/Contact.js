import React from 'react'
import MeLeft from '../assets/aboutPic.jpeg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${MeLeft})` }}></div>
        <div className='rightSide'>
            <h1> Contact Me</h1>

            <form id="contact-form" method="Post">
                <label htmlFor='name'> Full Name </label>
                <input name='name' placeholder='Enter full name...' type='text' />
                <label htmlFor='email'> Email </label>
                <input name='email' placeholder='Enter email...' type='email' />
                <label htmlFor='message'> Message </label>
                <textarea rows="6" placeholder='Enter message...' name='message' required></textarea>
                <button type="submit">Send Message</button>

            </form>
        </div>
    </div>
  )
}

export default Contact
