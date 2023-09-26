import React from 'react';
import ReactDOM from 'react-dom/client';
import photo from '../../images/profilePhoto.png';
import './style.css'
import { Slider } from 'antd';


const Home = () => {

    const onSubmit = () => {

    }

    return (
        <div className='home__root'>
            <div className='home__content'>
                <div className='home__profile'>
                    <br/>
                    <div className='home__header'>
                        Profile
                    </div>
                    <img src={photo} className='home__photo'/>
                    <div className='home__info'>
                        Jenny, 22
                    </div>
                </div>
                <div className='home__accountBlock'>
                    <label className='home__label'>Account Settings</label>
                    <input type='text' className='home__input' placeholder='Name' />
                    <input type='tel' className='home__input' placeholder='Phone Number' />
                    <input type='date' className='home__input' placeholder='Date of Birth' />
                    <input type='email' className='home__input' placeholder='Email' />
                </div>
                <div className='home__accountBlock'>
                    <label className='home__label'>Plan</label>
                    <input type='text' className='home__input' placeholder='Current Plan' />
                </div>
                <div className='home__accountBlock'>
                    <label className='home__label'>Discovery Settings</label>
                    <input type='text' className='home__input' placeholder='Location' />
                    <input type='tel' className='home__input' placeholder='Preferred Languages' />
                    <select type='dropdown' className='home__input' placeholder='Show Me' > 
                        <option>Male</option>
                        <option>Female</option>
                    </select> 
                    <label className='home__label'>Age Range</label><br/>
                    <Slider className='home__inputRange' range={true} />
                    <label className='home__label'>Maximum Distance</label><br/>
                    <Slider className='home__inputRange' range={true} />
                </div>
                <div className='home__buttonsBlock'>
                    <button type='submit' className='home__logoutBtn'>Logout</button>
                    <button type='submit' className='home__delteBtn'>Delete Account</button>
                </div>
            </div>
        </div>
    )
}

export default Home;