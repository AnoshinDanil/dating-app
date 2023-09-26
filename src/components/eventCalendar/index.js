import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../images/socials.png'
import './style.css'


const EventCalendar = ({isHasInput, year, country}) => {
    const [test, setTest] = useState([])
    const refTest = useRef(null)

    const GET = async (year,country) => {
        try{
            let res = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${country}`, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            })

            if (!res.ok) {
                const errRes = await res.json();
                const err = Error(errRes.error);
                err.status = res.status;
                throw err;
            }
            let resT = await res.json();
            return resT
        }catch(e){
            console.log(e.message)
            return []
        }
    }
    const onSubmit = async () => {
        if (isHasInput){
            if (refTest){
                let res = await GET(refTest.current.value, "RU");
                setTest(res)
            }
        }else{
            let y = year
            if (y == null) {
                y = new Date()
                y = y.getYear()
            }
            let c = country
            if (c == null){
                c = "RU"
            }
            let res = await GET(y, c);
            setTest(res)
        }

    }
    useEffect(()=>{
        onSubmit();
    },[])
    return (
        <div className='eventCalendar__root'>
            <div className='eventCalendar__header'>Event Calendar</div>
            {isHasInput && 
                <>
                    <input ref={refTest}></input>
                    <button onClick={(e)=>onSubmit()}>go</button>
                </>
            }
            {
                test && test.map((item) =>{
                    return <p className='eventCalendar__data'>
                        <div className='eventCalendar__name'>{item.name}</div>
                        <div className='eventCalendar__date'>{item.date}</div>
                        </p>
                })
            }
        </div>
    )
}

export default EventCalendar;