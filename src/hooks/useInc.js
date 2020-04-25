import { useState } from 'react';

const useInc = (initial = 0) => {
    const [ value, setValue ] = useState(initial);

    const inc = () => {
        setValue(prevState => prevState + 1);
    }

    const dec = () => {
        setValue(prevState => prevState - 1);
    }

    return [value, { inc, dec}]
}

export { useInc };

