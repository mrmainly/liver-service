import * as React from 'react';
import { useEffect, useState } from "react";
import { mainTheme } from "../styles";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    text: {
        color: 'rgba(42, 95, 167, 1)',
        textAlign: 'center',
        fontWeight: 500,
        lineHeight: 1.08,
        fontSize: 60,
        marginLeft: 20,
        marginRight: 20,
        [theme.breakpoints.down('xs')]: {
            fontSize: 30
        },
    },
    line: {
        width: 80,
        height: 2,
        background: 'rgba(42, 95, 167, 1)',
        [theme.breakpoints.down('xs')]: {
            width: 50
        },
    },
    textBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }
}))

export const ExtraLargeHeader = ({ children }) => {
    const classes = useStyles()
    return (
        <Box className={classes.textBox}>
            <Box className={classes.line}></Box>
            <Typography className={classes.text}>{children}</Typography>
            <Box className={classes.line}></Box>
        </Box>
    );
};