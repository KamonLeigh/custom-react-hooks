import React from 'react';
import { mount, unMount,  useToggle   } from '../hooks';


const Mount = () => {
    const [isToggled, toggle] = useToggle(false);

    return (
        <div>
            <button onClick={toggle}>toggle</button>
            { isToggled && <UnMounted/>}
        </div>
    )
}

const UnMounted = () => {
    mount(() => {
        console.log("I mounted")
    });
    unMount(() => {
        console.log("I unmounted")
    })
    return (
        <div>unmount me</div>
    )
}

export default Mount;
