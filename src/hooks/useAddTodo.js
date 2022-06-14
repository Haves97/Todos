import { useState } from 'react';

const useAddTodo = (props) => {
    const [todos, setTodos] = useState(props);
    return {
        todos,
        addTodo: todo => setTodos([...todos, todo])
    }
};

export default useAddTodo;