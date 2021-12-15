import React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Layout, MenuOurProject } from '../../components'

const useStyles = makeStyles(() => ({
    menu: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
    },
    container: {
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'end'
    },
    menu_link: {
        textDecoration: 'none',
        color: 'black',
    }
}))

const OurProjects = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Container className={classes.container}>
                <MenuOurProject />
            </Container>
        </Layout>
    )
}

export default OurProjects