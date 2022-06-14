import React from 'react';
import {
    List,
    ListItem,
    Checkbox,
    ListItemText,
} from '@mui/material';
import {
    RadioButtonUnchecked as CircleCheck,
} from '@mui/icons-material';
import cl from './TodoList.module.css'
import LastListItem from './lastListItem/LastListItem';

const TodoList = ({ todos, sort, setSort, checked, onChange }) => {
    const circleCheck = color => <CircleCheck sx={{ color }} />

    return (
        <List className={cl.list} disablePadding>
            {todos.map((todo) => (
                <ListItem key={todo.id} divider button>
                    <Checkbox
                        tabIndex={-1}
                        disableRipple
                        icon={circleCheck('#e6e6e6')}
                        checkedIcon={circleCheck('#1fa125')}
                        checked={checked[todo.id] || false}
                        onChange={onChange}
                        id={todo.id.toString()}
                    />
                    <ListItemText
                        primary={todo.text}
                        sx={checked[todo.id] ? { color: '#dfe6e9', textDecoration: 'line-through' } : {}}
                    />
                </ListItem>
            ))}
            <LastListItem sort={sort} setSort={setSort} />
        </List>
    )
}

export default TodoList;