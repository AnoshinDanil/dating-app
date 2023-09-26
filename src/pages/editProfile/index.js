import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'


const EditProfile = () => {

    const onSubmit = () => {

    }

    return (
        <div className='editProfile__root'>
            <div className='editProfile__content'>
                Edit
                <div className='editProfile__editBlock'>
                    Account Settings
                    <input type='text' className='editProfile__input' placeholder='Name' />
                    <input type='tel' className='editProfile__input' placeholder='Phone Number' />
                    <input type='date' className='editProfile__input' placeholder='Date of Birth' />
                    <input type='email' className='editProfile__input' placeholder='Email' />
                </div>
                <button type='submit' className='editProfile__btn'>SAVE</button>
            </div>
        </div>
    )
}

export default EditProfile;