import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'

import { mainTheme } from '../../styles'

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0px 2px 36px rgba(0, 0, 0, 0.08)',
        marginRight: 15,
        marginLeft: 15,
        padding: 10,
        minHeight: 190,
        [theme.breakpoints.down('xs')]: {
            padding: 5,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 10
        },
        borderRadius: 20,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        color: mainTheme.textColors.orange,
    },
}));
const CardNewBlog = ({ text_top, number, text_bottom }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                {text_top}
            </Typography>
            <Typography variant="h2" className={classes.title}>
                {number}
            </Typography>
            <Typography variant="h4" className={classes.title}>
                {text_bottom}
            </Typography>
        </Box>
    );
}

export default CardNewBlog