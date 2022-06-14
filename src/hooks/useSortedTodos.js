import { useMemo } from "react";


const useSortedTodos = (sort, todos, checked) => {
    const sorted = useMemo(() => {
        if (sort === 'all') {
            return todos;
        }
        if (sort === 'active') {
            return [...todos].filter(todo => checked[todo.id] !== true)
        }
        if (sort === 'completed') {
            return [...todos].filter(todo => checked[todo.id] === true)
        }
        return todos;
    }, [sort, todos, checked])
    return sorted;
};

export default useSortedTodos;