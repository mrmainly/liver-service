import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        height: 400,
        marginLeft: 15,
        marginRight: 15,
    },
    media: {
        height: 230,
        borderRadius: 5
    },
    title: {
        fontWeight: 'bold',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }
});

export default function CardCustom({ img, title, description, id }) {
    const classes = useStyles();
    const navigate = useNavigate()
    return (
        <Card className={classes.root}>
            <CardActionArea style={{ height: '100%', padding: 10 }} onClick={() => navigate(`/news-inside/${id}`)}>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <Box style={{ marginTop: 20, marginBottom: 20 }}>
                    <Typography gutterBottom variant="body1" component="h2" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.description}>
                        {description}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}