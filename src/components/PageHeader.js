import * as React from 'react';
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ExtraLargeHeader } from "./ExtraLargeHeader";

const useStyles = makeStyles({
    container: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 50
    },
    description: {
        margin: '16px 0px',
        textAlign: 'center',
        width: '50%'
    }
});

export const PageHeader = ({ title, description, ...props }) => {
    const classes = useStyles()

    return (
        <Box className={classes.container} {...props}>
            <ExtraLargeHeader>{title}</ExtraLargeHeader>
            <Typography variant="body1" className={classes.description}>{description}</Typography>
        </Box>
    );
};