import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'


const EnterCode = () => {

    const onSubmit = () => {

    }

    return (
        <div className="enterCode__root">
        <div className="enterCode__content">
                <div className='enterCode__header'>
                    Enter OTP
                </div>
                <div style={{ backgroundColor: "white"}}>
                        <input className='enterCode__input' type='text'/>
                    <div className='enterCode__buttonBlock'>
                        <button className='enterCode__buttonResend'>Resend</button>
                        <button className='enterCode__buttonContinue'>Continue</button>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default EnterCode;