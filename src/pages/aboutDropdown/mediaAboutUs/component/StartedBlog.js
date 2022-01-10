import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainTheme } from '../../../../styles'
import { Button } from '../../../../components'

import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        background: mainTheme.bgColors.orange,
        minHeight: 600,
        marginBottom: 50,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 0,
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50,
        },
    },
    img_box: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 25,
            marginBottom: 25
        },
    },
    text_box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 10
        },
    },
    infoBlock: {
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        [theme.breakpoints.down('md')]: {
            marginTop: 50
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0
        },
        paddingRight: 20
    },
    title: {
        color: 'white',
        marginBottom: 20,
        [theme.breakpoints.down('xs')]: {
            fontSize: 35
        },
    },
    description: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        },
    }
}));

const StartedBlog = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <div className={classes.container}>
            <Container>
                <Grid container className={classes.content}>
                    <Grid item lg={6} sm={11} md={6} xl={6} xs={11} className={classes.infoBlock}>
                        <Typography variant="h6" className={classes.description}>
                            Паллиативная помощь - это комплекс мероприятий, которые осуществляются с целью облегчения страданий и лечения тяжелых проявлений заболевания неизлечимо больных людей и улучшения качества жизни пациента и его семьи. Паллиативная медицинская помощь не направлена на лечение основного заболевания. Она ориентирована в первую очередь на потребности пациента. В Якутии основными операторами паллиативной медицинской помощи являются Республиканская клиническая больница №3 и Медицинский центр г. Якутск.
                        </Typography>
                        <Button style={{ marginTop: 20 }}>Помочь</Button>
                    </Grid>
                    <Grid item lg={6} sm={11} md={6} xl={6} xs={11} className={classes.img_box}>
                        <img src={'/image/Group81.png'} alt={''} style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default StartedBlog