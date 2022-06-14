import { TextField } from '@mui/material';
import React from 'react';
import useInputState from '../../hooks/useInputState';
import { sxTextFild } from './sxTextField';
import cl from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
    const { value, reset, onChange } = useInputState('');

    return (
        <form
            className={cl.form}
            onSubmit={event => {
                event.preventDefault();
                addTodo({
                    id: Date.now(),
                    text: value
                });
                reset();
            }}
        >
            <TextField
                sx={sxTextFild()}
                id="outlined-textarea"
                placeholder="Add todo"
                fullWidth
                onChange={onChange}
                value={value}
            />
        </form>
    );
};

export default TodoForm;