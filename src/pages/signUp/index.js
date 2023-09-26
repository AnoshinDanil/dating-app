import React from 'react';
import './style.css';
import SignUpPanel from '../../components/signUpPanel';

const SignUp = () => {

    return (
        <div className='signUp__root'>
            <div className='signUp__content'>
                <SignUpPanel />
            </div>
        </div>
    )
}

export default SignUp