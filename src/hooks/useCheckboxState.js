import { useState } from 'react';

const useCheckboxState = (props) => {
    const [checked, setChecked] = useState(props);

    return {
        checked,
        onChange: (event) => { setChecked({ ...checked, [event.target.id]: event.target.checked }) },
    };
};

export default useCheckboxState;