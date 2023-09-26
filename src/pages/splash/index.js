import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../images/splashLogo.png'
import './style.css';

const Splash = () => {
    return (
        <div className="splash__root">
            <div className="splash__content">
                <div className='splash__signIn'>
                    <div className='splash__img'>
                        <img  src={logo} alt='logo'/>
                    </div>
                    <div style={{ backgroundColor: "green"}}>
                        <div className='splash__text'>
                            <div>By clicking Log In, you agree with our Terms.</div>
                            <div>Learn how we process your data in our Privacy</div>
                            <div>Policy and Cookies Policy.</div>
                        </div>
                        <div className='splash__buttonsBlock'>
                            <button className='splash__button'>LOGIN WITH GOOGLE</button>
                            <button className='splash__button'>LOGIN WITH FACEBOOK</button>
                            <button className='splash__button'>LOGIN WITH PHONE</button>
                        </div>
                        <div className='splash__signUpText'>
                            Don’t have account? Signup
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;