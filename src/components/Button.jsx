import React from 'react'

export default function Button(props) {
    const { text, func } = props  
    return (
        <button onClick={func} className = 'px-8 py-4 rounded border-[2px] border-solid background-slate-950 blueShadow duration-200'>
                <p>{text}</p>
            </button> 
         )
}
