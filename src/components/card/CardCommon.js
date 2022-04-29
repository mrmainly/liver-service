import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, CardMedia, CardActionArea } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20,
        boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.1)',
        width: '90%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    cardContent: {
        height: 178,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: 10
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',

    },
}));
const CardCommon = ({ description, name, price, id }) => {
    const classes = useStyles();
    const navigate = useNavigate()
    return (
        <Box className={classes.root}>
            <CardActionArea onClick={() => navigate(`/volunteers-detail/${id}`, { state: { price: price, description: description, name: name } })}>
                <Box className={classes.cardContent}>
                    <Box className={classes.titleBox}>
                        <Typography variant="h6" style={{ color: 'rgba(81, 165, 212, 1)' }}>
                            {name}
                        </Typography>
                        <Typography variant="body1" style={{ color: 'rgba(42, 95, 167, 1)' }}>
                            {price} руб
                        </Typography>
                    </Box>
                    <div dangerouslySetInnerHTML={{ __html: description }}>

                    </div>
                </Box>
            </CardActionArea>
        </Box>
    );
}

export default CardCommon