import './style.css';
import React from 'react';
import photo1 from '../../images/interlocutor1.png'
import photo2 from '../../images/interlocutor2.png'
import photo3 from '../../images/interlocutor3.png'
import photo4 from '../../images/interlocutor4.png'

const ChatList = () => {

    const interlocutorArray = [
        {photo : photo1, name : 'Siliva', message: 'I’m not a hoarder but I really...', time: '11:30'},
        {photo : photo2, name : 'Lucy', message: 'Hi', time: '13:51'},
        {photo : photo3, name : 'Angela', message: 'Is your body from Mcdonals?', time: '14:42'},
        {photo : photo4, name : 'Elya', message: 'Typing...', time: '17:26'},
    ]

    return (
        <div className='chatList__root'>
            {interlocutorArray && interlocutorArray.map((data) => {
                return (
                    <div className='chatList__interlocutor'>
                        <img className='chatList__img' src={data.photo} />
                        <div className='chatList__contentBlock'>
                            <div className='chatList__name'>{data.name}</div>
                            <div className='chatList__message'>{data.message}</div>
                        </div>
                        <div className='chatList__time'>{data.time}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatList