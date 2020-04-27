import React from 'react';
import { useLocalStorage } from '../hooks'

function Local() {
    const [ local, setLocal ] = useLocalStorage('vue', 'here')
    
    return (
        <div>
          <h1>{local|| ""}</h1>
          <input value={local} onChange={e => setLocal(e.target.value)}/>
        </div>
    )
}

export default Local
