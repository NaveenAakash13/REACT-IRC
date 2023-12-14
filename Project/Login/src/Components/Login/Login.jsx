import React from 'react'
import './Login.css'
import eml from '../Assets/email_logo.png'
import psswd from '../Assets/password_logo.png'
import logo from '../Assets/logo1.png'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='container'>
        <div className='header'>
            <img src={logo} alt=''height={200} width={200} />
            <div className='bgtext'>Hestia Foundations</div>
            <div className='text'>Login</div>
            <br/>
            <div className='underline>'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={eml} alt=''height={45} width={45} />
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={psswd} alt='' height={45} width={45}/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        <div className='submit-container'>
            <button type='button' class="button">Login</button>
            <br/>
            <Link to="/register"><button class="button">Create Account</button></Link>
            </div>
    </div>
  )
}
export default Login;