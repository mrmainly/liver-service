import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '../../../../components'

import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        background: 'linear-gradient(145.24deg, rgba(58, 113, 253, 0.25) 14.79%, rgba(183, 225, 255, 0) 61.66%), radial-gradient(46.05% 156.8% at 84.98% 128.33%, rgba(89, 106, 255, 0.25) 0%, rgba(68, 75, 255, 0) 100%), #B7E1FF;',
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
        textAlign: 'center',
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
    button_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    infoBlock: {
        display: 'flex',
        flexDirection: 'column',
        color: '#2A5FA7',
        [theme.breakpoints.down('md')]: {
            marginTop: 50
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0
        },
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
                        <Typography variant="h3" className={classes.title}>Паллиативная помощь</Typography>
                        <Typography variant="h6" className={classes.description}>Если вы просматриваете наш сайт, наверняка уже знакомы с темой трансплантации органов. Наша команда — это пациенты с донорскими органами, и люди, которые ждут трансплантацию органов, близкие родственники, друзья, а также врачи нефрологи, инфекционисты, трансплантологи, хирурги и терапевты — все, которые спасают жизни и поддерживают людей на диализе и после трансплантации органов.
                        </Typography>
                        <Box className={classes.text_box}>
                            <Box className={classes.button_box}>
                                <Button onClick={() => navigate('/news')}>Новости</Button>
                                <Button >Узнать подробнее</Button>
                            </Box>
                        </Box>
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