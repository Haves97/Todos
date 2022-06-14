import { useState } from 'react';
const useInputState = (props) => {
    const [value, setValue] = useState(props);

    return {
        value,
        onChange: event => setValue(event.target.value),
        reset: () => setValue('')
    };
};

export default useInputState;