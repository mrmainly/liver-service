import React from 'react'

import { Container, Box } from '@material-ui/core'
import { Layout } from '../../../components'

import StartBlog from './components/StartBlog'
import TwoScreen from './components/TwoScreen'
import { Slider } from '../../../components'

const Contacts = () => {
    return (
        <Layout>
            <Box style={{ marginBottom: 100 }}>
                <StartBlog />
                <TwoScreen />
                <Box style={{ marginTop: 100 }}>
                    <Slider />
                </Box>
            </Box>
        </Layout>
    )
}

export default Contacts