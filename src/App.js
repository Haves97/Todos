import { useState } from "react";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import useAddTodo from "./hooks/useAddTodo";
import useSortedTodos from "./hooks/useSortedTodos";
import useCheckboxState from "./hooks/useCheckboxState"
import './styles/App.css'

function App() {
  const { todos, addTodo } = useAddTodo([]);
  const { checked, onChange } = useCheckboxState({});
  const [sort, setSort] = useState('all');
  const sortTodos = useSortedTodos(sort, todos, checked);
  return (
    <div className="App">
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={sortTodos}
        sort={sort}
        setSort={setSort}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
