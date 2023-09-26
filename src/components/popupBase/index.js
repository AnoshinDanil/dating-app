import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../images/socials.png'
import './style.css'
import { functions } from '../globals';


const PopupBase = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const Open = () => {
        setIsOpen(true)
    }

    const Close = () => {
        setIsOpen(false)
    }

    useEffect(()=>{
        functions.popupBase = {
            open: Open,
            close: Close,
        }
    })
    return (
        <div className='popupBase__root' style={{display: `${ isOpen ? 'block': "none"}`}}>
            <div className='popupBase__content'>
            <button onClick={()=>{
                Close()
            }}>close popup</button>
                <div className='popupBase__header'>{title}</div>
                {children}
            </div>

        </div>
    )
}

export default PopupBase;