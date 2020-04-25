import { useEffect } from 'react';

export const mount = (fn) => {

    useEffect(() => { // eslint-disable-line react-hooks/rules-of-hooks
        fn();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

}

export const unMount = (fn) => {
    useEffect(() => { // eslint-disable-line react-hooks/rules-of-hooks
        
        return () => {
          fn();
        }
    })
}