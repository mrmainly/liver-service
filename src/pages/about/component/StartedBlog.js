import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '../../../components'

import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/Elenent_fon.png"})`,
        backgroundRepeat: 'no0repeat',
        backgroundSize: 'cover',
        height: 600,
        marginBottom: 100,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 0,
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50,
        },
    },
    img_box: {
        marginTop: 95,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 0
        },
    },
    text_box: {
        marginBottom: '-100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: '-40px'
        },
    },
    button_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },

}));

const StartedBlog = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <div className={classes.container}>
            <Container>
                <Grid container className={classes.content}>
                    <Grid item lg={4} sm={11} md={4} xl={4} xs={11}>
                        <Typography variant="h3">Паллиативная медицинская помощь в Якутии</Typography>
                        <Box className={classes.text_box}>
                            <Box className={classes.button_box}>
                                <Button text={'Новости'} />
                                <Button text={'Узнать подробнее'} />
                            </Box>
                            <Box style={{ marginTop: 20, marginBottom: 50 }}>
                                <Button text="политика конфедициальности" onClick={() => { navigate('/about/privacy') }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={11} md={4} xl={6} xs={11} className={classes.img_box}>
                        <img src={'/image/Group/Group409.png'} alt={''} style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default StartedBlog