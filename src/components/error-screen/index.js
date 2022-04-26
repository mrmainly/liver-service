import React from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 30
        },
    }
}));

const ErrorScreen = () => {
    const navigate = useNavigate()
    const classes = useStyles()

    return (
        <Box style={{
            paddingTop: 50
        }}>
            <Typography variant="h3" className={classes.title}>Страница находится в разработке</Typography>
            <img src="/image/HTML.png" style={{ marginTop: 20, width: '100%' }} />
            <Button variant="contained" style={{
                marginTop: 20,
                color: 'black',
                border: 0,
                height: 48,
                fontSize: 16,
                borderRadius: 5,
                background: 'white',
                fontWeight: 600,
                padding: '25px 50px 25px 50px',
            }} onClick={() => navigate('/')}>Перейти на главную страницу</Button>
        </Box>
    )
}

export default ErrorScreen 