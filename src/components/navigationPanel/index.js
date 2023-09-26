import "./styles.css";
import React, { useEffect, useRef } from "react";
import homePage from "../../images/homepage 1.png"
import likes from "../../images/homepage 2.png"
import chat from "../../images/homepage 3.png"
import profile from "../../images/homepage 4.png"

const NavigationPanel = ({side = "bottom"}) => {

    const ref = useRef("panel")

    const panelPosition = () => {
        const panel = ref.current

        if (side === "bottom") {
            panel.style.bottom = 0
        }
        else if (side === "top") {
            panel.style.top = 0
        }
        else if (side === "left") {
            panel.style.left = 0
        }
        else if (side === "right"){
            panel.style.right = 0
        }
    }

    const panelStyles = side === "bottom" ? "navPanel__rootBottom" : side === "top" ? "navPanel__rootTop" :  side === "left" ? "navPanel__LeftSideRoot" : "navPanel__rightSideRoot"
    const buttonStyles = side === "bottom" || side === "top" ? "navPanel__buttonHorizontal" : "navPanel__buttonVertical"

    
    useEffect(() => {
        panelPosition()
    },[ref])

    return(
    <div className={panelStyles} ref={ref}>
        <img src={homePage} className={buttonStyles} onClick={() => console.log('Hello!')} />
        <img src={likes} className={buttonStyles} onClick={() => console.log('Hello!')} />
        <img src={chat} className={buttonStyles} onClick={() => console.log('Hello!')} />
        <img src={profile} className={buttonStyles} onClick={() => console.log('Hello!')} />
    </div>
    )

}

export default NavigationPanel