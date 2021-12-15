import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        color: 'black',
        border: 0,
        height: 48,
        padding: '0 20px',
        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.25)',
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
        marginLeft: 12,
        background: 'white'
    }
}));

const ButtonCustom = ({ onClick, href, children, ...props }) => {
    const classes = useStyles()
    return (
        <Button variant="contained" type="submit" className={classes.btn} onClick={onClick} href={href} {...props}>
            {children}
        </Button>
    )
}

export default ButtonCustom