import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CardTeam } from '../../../../components'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: 70
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const DreamTeam = () => {
    const classes = useStyles()

    const object = [
        {
            img: '/image/Rectangle87.png',
            title: 'anton',
            description: 'Founder, CVO'
        },
        {
            img: '/image/Rectangle87.png',
            title: 'anton',
            description: 'CEO, team lead'
        },
        {
            img: '/image/Rectangle87.png',
            title: 'anton',
            description: 'Project manager, marketer'
        },
        {
            img: '/image/Rectangle87.png',
            title: 'anton',
            description: 'CTO, Full stack developer'
        },
        {
            img: '/image/Rectangle87.png',
            title: 'anton',
            description: 'Chief Design Officer'
        },
        {
            img: '/image/Rectangle87.png',
            title: 'anton',
            description: 'SEO, SMM'
        },
    ]

    return (
        <Container className={classes.container}>
            <Grid >
                <Typography variant="h3" style={{ color: 'black', fontFamily: 'serif', fontWeight: 'bold' }}>Dream Team</Typography>
                <Typography style={{ color: '#8D9AAE' }}>Lorem lorem loem</Typography>
            </Grid>
            <Grid container className={classes.content}>
                {object.map((item, index) => (
                    <Grid item key={index} lg={3} sm={6} md={4} xl={3} xs={12}>
                        <CardTeam img={item.img} title={item.title} description={item.description} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default DreamTeam