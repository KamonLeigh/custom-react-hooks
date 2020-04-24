import React, { useState } from 'react'

export const Toggle = () => {
    const [ isToggled, setToggle ] = useState(false);
    return (
        <div>
            <button onClick={()=>{
                return setToggle(prevState => !prevState);
            }}>
                Toggle
            </button> 
            { isToggled && <p>To be toggled</p> }
        </div>
    )
}