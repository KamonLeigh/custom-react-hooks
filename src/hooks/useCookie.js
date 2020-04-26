import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useCookie = ({ key }) => {
    const initial = Cookies.get(key)
    const [ cookie, setStateCookie] = useState(initial);
    
    useEffect(() => {
        Cookies.set(key, cookie)

    }, [cookie, key])
    return [cookie, setStateCookie];
    
};

export { useCookie }