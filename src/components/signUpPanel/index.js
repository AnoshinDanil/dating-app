import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../images/socials.png'
import './style.css'


const SignUpPanel = () => {
    const onSubmit = async () => {

    }

    useEffect(()=>{
    },[])
    return (
        <div className='signUpPanel__root'>
            <div className='signUpPanel__header'>Sign Up</div>
            <div className='signUpPanel__inputsRoot'>
                <div className='signUpPanel__inputsBlock'>
                    <label >Full Name</label><br/>
                    <input type='text' className='signUpPanel__input' />
                </div>
                <div className='signUpPanel__inputsBlock'>
                    <label >Gender</label><br/>
                    <select type='dropdown' className='signUpPanel__input' > 
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className='signUpPanel__inputsBlock'>
                    <label >DD/MM/YYYY</label><br/>
                    <input type='date' className='signUpPanel__input' />
                </div>
                <div className='signUpPanelp__inputsBlock'>
                    <label >Phone Number</label><br/>
                    <input type='text' className='signUpPanel__input' />
                </div>
            </div>
            <div>
                <button type='submit' className='signUpPanel__btn'>SIGN UP</button>
                <div className='signUpPanel__socialSignUp'> or </div>
                <img className='signUpPanel__image' src={logo} alt='logo' />
            </div>
        </div>
    )
}

export default SignUpPanel;