import React from 'react';
import { useCookie } from '../hooks'

function Cookie() {
    const [ cookie, setCookie ] = useCookie({ key: 'react'})
    
    return (
        <div>
          <h1>{cookie || ""}</h1>
          <input value={cookie} onChange={e => setCookie(e.target.value)}/>
        </div>
    )
}

export default Cookie
