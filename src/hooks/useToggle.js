import { useState } from 'react';

function useToggle( initial) {
 const [isToggled, setToggled ] = useState(initial);

 const toggle = () => setToggled(prevState => !prevState);

 return [isToggled, toggle]

}

export { useToggle };