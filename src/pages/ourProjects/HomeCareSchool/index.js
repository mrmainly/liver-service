import React from 'react'

import { Container, MenuItem, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'

import { Layout, MenuOurProject, Button } from '../../../components'
import Links from '../../../Data/Links'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 100
    },
    menuItem: {
        marginTop: 20,
        width: '95%',
        minHeight: 100,
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
        // display: 'block',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        background: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)'
    }
}))

const HomeCareSchool = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <Layout>
            <Container className={classes.container}>
                {/* <MenuOurProject /> */}
                <Grid container>
                    {Links.map((item, index) => {
                        return (
                            <Grid item lg={3} xl={3} md={4} sm={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    key={index}
                                    onClick={() => {
                                        navigate(item.link)
                                    }}
                                    className={classes.menuItem}
                                >
                                    {item.label}
                                </Button>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Layout>
    )
}

export default HomeCareSchool