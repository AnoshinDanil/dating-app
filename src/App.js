import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import { generateReroute, pages } from "./components/globals"
import Card from './pages/card';
import MainPage from './pages/mainPage';
import ManageSubscription from './pages/manageSubscription';
function App() {
  const [isPopupOpen, setisPopupOpen] = useState(false)
  const navigate = useNavigate();

  const closePopup = () =>{
    setisPopupOpen(false)
  }
  return (
    <div className="App">
        {
          pages && pages.map((page)=>{
            return <button onClick={()=>{
                      navigate(page.route)
                    }}>{page.label}</button>
            })
        }
      <Routes>
        {
          pages && pages.map((page)=>{
            if (!page.route) return "";
            if (!page.component) return "";
            return <Route 
                    path = {page.route}  
                    element = {    
                      <>
                        {page.component}
                      </>
                    }/>
            })
        }
      </Routes>
    </div>
  );
}

export default App;
