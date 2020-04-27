import React from 'react'
import { useScript } from '../hooks'

const Query= () => {
    const [isLoaded, isError] = useScript('https://code.jquery.com/jquery-3.5.0.min.js');

   if(!isLoaded) return null
    return (
        <div>
            <h1>Query</h1>
        </div>
    )
}

export default Query
