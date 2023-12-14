import React from 'react'
import './Register.css'
import eml from '../Assets/email_logo.png'
import psswd from '../Assets/password_logo.png'
import logo from '../Assets/logo1.png'
import phn from '../Assets/contact_logo.png'
import pers from '../Assets/user_logo.png'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className='container'>
        <div className='header'>
            <img src={logo} alt=''height={200} width={200} />
            <div className='bgtext'>Hestia Foundations</div>
            <div className='text'>Sign Up</div>
            <br/>
            <div className='underline>'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={pers} alt=''height={40} width={40} />
                <input type='username' placeholder='Username'/>
            </div>
            <div className='input'>
                <img src={eml} alt=''height={40} width={40}/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={psswd} alt='' height={40} width={40}/>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='input'>
                <img src={psswd} alt='' height={40} width={40}/>
                <input type='conpassword' placeholder='Confirm Password'/>
            </div>
            <div className='input'>
                <img src={phn} alt='' height={40} width={40}/>
                <input type='number' placeholder='Contact No'/>
            </div>
        </div>
        <div className='submit-container'>
            <button type='button' class="button">Register</button>
            <br/>
            <Link to="/"><button class="button">Login</button></Link>
            </div>
    </div>
  )
}
export default Register;