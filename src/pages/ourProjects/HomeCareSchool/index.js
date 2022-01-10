import React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Layout, MenuOurProject } from '../../../components'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'end',
        marginTop: 20
    },
}))

const HomeCareSchool = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Container className={classes.container}>
                <MenuOurProject />
            </Container>
        </Layout>
    )
}

export default HomeCareSchool