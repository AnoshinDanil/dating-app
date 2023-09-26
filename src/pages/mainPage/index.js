import Card from '../card';
import like from '../../images/like.png'
import dislike from '../../images/dislike.png'
import logo from '../../images/logo.png'
import check from '../../images/check.png'
import filter from '../../images/filter.png'
import './style.css'
import { useEffect, useState } from 'react';
import { Slider } from 'antd';
import { getKeys, setKeys } from '../../components/globals';

const MainPage = () => {

    const [open , setOpen] = useState(false) 
    const [range, setRange] = useState(0)
    const [age, setAge] = useState(0)
    const [gender , setGender] = useState('Male')

    useEffect(() => {
        try {
            let v = getKeys('Filter')
            let jVal = JSON.parse(v);
            setRange(jVal.range)
            setAge(jVal.age);
            setGender(jVal.gender);
        }
        catch (err) {
            console.error(err)
        }
    },[])

    // const reverse = (str) => {
    //     let r = "";
    //     for(let i = str.length-1; i >=0; i--){
    //         r += str[i]
    //     }
    //     return r
    // }
    // const array = ['title', 'eltit', 'eltit', 'eltit','eltit']
    // let res = {}
    // for (let i = 0; i < array.length; i++){
    //     if (res[array[i]] != undefined) continue;
    //     res[array[i]] = 0;
    //     for(let j = 0; j < array.length; j++){
    //         if (j != i)
    //             if (array[i] === reverse(array[j])){
    //                 res[array[i]] += 1;
    //             }
    //     }
    // }
    // console.log(res)

    const isOpened = () => open === false ? setOpen(true): setOpen(false)
    const saveValues = () => {
        isOpened()
        setKeys('Filter', JSON.stringify({ age, range, gender }))
    }
    const iconDisplay = open === false ? filter : check

    return (
        <div className='mainPage__root'>
            <div className='mainPage__topBlock'>
                <div />
                { open === false ? 
                <img src={logo} className='mainPage__logo' /> 
                : 
                <div className='mainPage__filterHeader'>
                    Filter
                </div>
                }
                <img src={iconDisplay} onClick={saveValues} className='mainPage__filter' />
            </div>
                <div className={`mainPage__filterBlock ${open ? "mainPage__filterBlock__visible": ""}`}>
                    <div className='mainPage__inputBlock'>
                        <label className='mainPage__label'>Distance</label><br/>
                        <Slider className='mainPage__inputRange' range={true} value={range} onChange={setRange} />
                    </div>
                    <div className='mainPage__inputBlock'>
                        <label className='mainPage__label'>Gender</label><br/>
                        <select type='dropdown' className='mainPage__input' > 
                            <option>Male</option>
                            <option>Female</option>
                        </select> 
                    </div>
                    <div className='mainPage__inputBlock'>
                        <label className='mainPage__label'>Age</label><br/>
                        <Slider className='mainPage__inputRange' range={true} value={age} onChange={setAge} />
                    </div>            
                </div>
            <Card />
            <div className='mainPage__buttonsBlock'> 
                <img src={dislike} className='mainPage__likeBtn' draggable={false} />
                <img src={like} className='mainPage__likeBtn' draggable={false} />
            </div>
        </div>
    )
}

export default MainPage;