import { useState, useEffect } from 'react';

const useLocalStorage = ( key, initial ) => {
    const item = window.localStorage.getItem(key);
    const [ value, setValue] = useState(item || initial);
    
    useEffect(() => {
        
        window.localStorage.setItem(key, value);

    }, [value, key, initial])
    return [value, setValue];
    
};

export { useLocalStorage }