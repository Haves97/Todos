export const sxListItem = () => {
    return {
        display: 'flex',
        justifyContent: 'center',
        m: 0,
        p: 0,
    }
};

export const sxButton = () => {
    return {
        p: '5px',
        mx: '10px',
        my: '5px',
        fontSize: 12,
        textTransform: 'none',
        color: '#b4bfb4',
        minWidth: 0,
        lineHeight: 1,
        border: 0,
        '&:hover': {
            boxShadow: 'none'
        },
        '&:focus': {
            boxShadow: '0 0 0 0.1rem rgba(180,191,180,.5)',
        },
        // '&.MuiToggleButton-root.Mui-selected': {
        //     color: 'rgba(175, 47, 47, 0.15)',
        // }
    }
};


