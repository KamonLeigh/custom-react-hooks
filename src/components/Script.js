import React from 'react'
import { useScript } from '../hooks'

const Script = () => {
    const [ isLoaded, isError] = useScript('https://www.google.com/recaptcha/api.js');

   if(!isLoaded) return null
    return (
        <div>
            <h1>Script</h1>
        </div>
    )
}

export default Script
