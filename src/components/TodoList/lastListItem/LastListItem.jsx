import { ListItem, ToggleButtonGroup, ToggleButton } from '@mui/material';
import React from 'react';
import { sxButton, sxListItem } from './sxLastListItem';


const LastListItem = ({ sort, setSort }) => {
    return (
        <ListItem
            sx={sxListItem()}
            key={Date.now()}
            divider
        >
            <ToggleButtonGroup
                value={sort}
                exclusive
                onChange={(event, newAlignment) => {
                    if (newAlignment !== null) {
                        setSort(newAlignment)
                    }
                }}
            >
                <ToggleButton sx={sxButton()} value="all" >
                    all
                </ToggleButton>
                <ToggleButton sx={sxButton()} value="active">
                    active
                </ToggleButton>
                <ToggleButton sx={sxButton()} value="completed">
                    completed
                </ToggleButton>
            </ToggleButtonGroup>
        </ListItem>
    );
};

export default LastListItem;