import * as React from 'react';
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ExtraLargeHeader } from "./ExtraLargeHeader";

const useStyles = makeStyles({
    container: {
        maxWidth: 800,
        margin: 'auto',
        marginTop: 80,
        marginBottom: 80
    },
    description: {
        margin: '16px 0px',
        textAlign: 'center'
    }
});

export const PageHeader = ({ title, description }) => {
    const classes = useStyles()

    return (
        <Box className={classes.container} >
            <ExtraLargeHeader>{title}</ExtraLargeHeader>
            <Typography variant="body1" className={classes.description}>{description}</Typography>
        </Box>
    );
};