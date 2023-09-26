import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { CloseOutlined } from "@ant-design/icons";

export const Navbar = ( { children } ) => {
  const [burger_class, setBurgerClass] = useState("burger__bar unclicked");
  const [settingsClass, setSettingsClass] = useState("burgerMenu__menuContent menuContent__hidden");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSettingsClicked, setIsSettingsClicked] = useState(false);

  const menuRef = useRef(null);
  const bodyRef = useRef(null);

  const closeSetting = () => {
    setSettingsClass("burgerMenu__menuContent menuContent__hidden")
  }

  useEffect(() => {
    makeNavbarDraggable()
    let val = localStorage.getItem("navDrag")
    if (val != null){
      const navbar = bodyRef.current
      let jVal = JSON.parse(val);
      navbar.style.position = 'absolute';
      navbar.style.zIndex = 1000;
      navbar.style.left = jVal.left;
      navbar.style.top = jVal.top;
    }
  }, [])

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger__bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger__bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const openSettings = () => {
    if (!isSettingsClicked) {
      setSettingsClass("burgerMenu__menuContent menuContent__visible");
    } else {
      setSettingsClass("burgerMenu__menuContent menuContent__hidden");
    }
    setIsSettingsClicked(!isSettingsClicked);
  };

  function makeNavbarDraggable() {
    let isDragging = false;
    let initialX = 0;
    let initialY = 0;
    const isPositionChanged = false 

    const navbar = menuRef.current
    const body = bodyRef.current
  
    navbar.onmousedown = function(event) {
      isDragging = true;
      initialX = event.clientX - body.offsetLeft;
      initialY = event.clientY - body.offsetTop;
      body.style.position = 'absolute';
      body.style.zIndex = 1000;
    };
  
    document.onmouseup = function() {
      isDragging = false;
    };
  
    document.onmousemove = function(event) {
      if (isDragging) {
        body.style.left = `${event.clientX - initialX}px`;
        body.style.top = `${event.clientY - initialY}px`;
        localStorage.setItem('navDrag', JSON.stringify({left: `${event.clientX - initialX}px`, top: `${event.clientY - initialY}px`}))
      }
    };
  }

  const onResetClick = () => {
    const body = bodyRef.current

    localStorage.removeItem('navDrag')    

    body.style.position = 'relative';
    body.style.left = 'auto';
    body.style.top = 'auto';
  }
  
  return (
    <div style={{ width: "100%" }} ref={bodyRef} >
      <nav>
        <div className="burger__menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className="burgerMenu__text" ref={menuRef}>
          Event Calendar
        </div>
          <button onClick={openSettings}>
            Menu
          </button>
          <div className={settingsClass}>
            <div className='burgerMenu__content'>
              <CloseOutlined className="burgerMenu__crossIcon" onClick={openSettings} />
              <div className='burgerMenu__resetBtnContainer'>
                <button className="burgerMenu__resetBtn" onClick={onResetClick}>
                  Reset
                </button>
              </div>
            </div>
          </div>
      </nav>

      <div className={menu_class}>
        {children}
      </div>
    </div>
  );
};
