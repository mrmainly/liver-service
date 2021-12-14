import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions, Button } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '90%',
        height: 400,
        margin: '0 auto'
    },
    media: {
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }
});

export default function CardCustom({ img, title, description, id, tag }) {
    const classes = useStyles();
    const navigate = useNavigate()
    return (
        <Card className={classes.root}>
            <CardActionArea style={{ height: '100%' }} onClick={() => navigate(`/news-inside/${id}`)}>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="h2" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.description}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}