import * as React from 'react';
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { mainTheme } from "../styles";

import { ExtraLargeHeader } from "./ExtraLargeHeader";

const useStyles = makeStyles({
    container: {
        maxWidth: 800,
        margin: 'auto'
    },
    title: {
        fontWeight: 500,
        color: mainTheme.colors.darkBlue,
        textAlign: 'center',
        fontFamily: mainTheme.fontFamily.Roboto,
        fontSize: mainTheme.textSizes.extraLarge
    },

    description: {
        margin: '16px 0px',
        color: mainTheme.colors.lightPurple,
        textAlign: 'center'
    }
});

export const PageHeader = ({ name, title, description }) => {
    const classes = useStyles()

    return (
        <Box className={classes.container} >
            <Typography >{name}</Typography>
            <ExtraLargeHeader>{title}</ExtraLargeHeader>
            <Typography >{description}</Typography>
        </Box>
    );
};