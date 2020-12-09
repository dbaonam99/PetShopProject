import React, { useEffect, useState } from 'react'
import '../../Styles/Home.css'
import '../../App.css'

export default function Feature(props) {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    useEffect(()=>{
        setLeft(45)
        setRight(55)
    },[])

    return (
        <div className="Feature flex">
            <div className={props.reverse === true ? "left-feature flex-order" : "left-feature"} style={{width: `${left}%`, background: `${props.color}`}}>
                {props.children}
            </div>
            <div className="right-feature" style={{width: `${right}%`}}>
                <img src={props.img} width="100%" height="100%" alt=""></img>
            </div>
        </div>
    )
}