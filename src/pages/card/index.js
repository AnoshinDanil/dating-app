import './style.css'
import photo from '../../images/photo.jpg'
import cardMask from '../../images/cardMask.png'
import like from '../../images/like.png'
import dislike from '../../images/dislike.png'

import { useRef, useEffect, useState } from 'react'

const Card = ({height, width}) => {
    const [state,setState] = useState(0)
    const ref = useRef("Card")

    function makeNavbarDraggable() {
        let isDragging = false;
        const card = ref.current
        let initialX = 0;
        let initialY = 0;
        
        card.onmousedown = function(event) {
          isDragging = true;
          initialX = event.clientX;
          initialY = event.clientY;
          card.style.transform = `translate(0,0) rotate(0deg)`
          card.style.zIndex = 1000;
        };
      
        document.onmouseup = function() {
          setState(0)
          isDragging = false;
          card.style.transform = `translate(0,0) rotate(0deg)`
        };
      
        document.onmousemove = function(event) {
          if (isDragging) {
           let x = event.clientX - initialX;
           let rot = (x)/10
           if (Number(rot) >= 45 && rot > 0) rot = 45
           if (Number(rot) <= -45 && rot < 0) rot = -45
           if (Number(x) >= 100) x = 50
           if (Number(x) <= 100) x = -50
           if (rot > 0) setState(1)
           if (rot < 0) setState(2)
           if (rot === 0) setState(0)
            card.style.transform = `rotate(${rot}deg)`
          }
        };
      }

    useEffect(() => {
    makeNavbarDraggable()
    }, [])

    return (
      <div className='card__Card_root' ref={ref} draggable={false} onClick={makeNavbarDraggable} style={{height: `${typeof height === typeof 1 ? height + "px": height}`, width: `${typeof width === typeof 1 ? width + "px": width}`}}>
        <img src={cardMask} className='card__cardMask'  draggable={false} />
        <img src={photo} className='card__photo'  draggable={false} />
        <img src={like} className='card__like'  draggable={false} style={{opacity: `${state ===1 ? '1':'0'}`}} />
        <img src={dislike} className='card__like'  draggable={false} style={{ opacity: `${state ===2 ? '1':'0'}`}} />
        <div className='card__info'  draggable={false} >
        <div className='card__info_name'  draggable={false} >Natalie</div>
        <div className='card__info_range'  draggable={false} >5 miles</div>
        </div>
      </div>
    )
}

export default Card