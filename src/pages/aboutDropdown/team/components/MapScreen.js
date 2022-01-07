import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: 100,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 60,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 0
        },
        paddingLeft: 30
    },
    Box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContent: {
    }

}))

const MapScreen = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Grid container className={classes.content}>
                <Grid item lg={4} sm={10} md={6} xl={4} xs={10} className={classes.textContent}>
                    <Typography variant="h4">
                        Lorem lormea<br /> Lorme
                    </Typography>
                    <Typography style={{ marginTop: 10 }}>

                    </Typography>
                </Grid>
                <Grid item lg={6} sm={12} md={6} xl={6} xs={12}>
                    <img src={'/image/Rectangle180.png'} style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MapScreen