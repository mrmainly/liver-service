import React from 'react'

import { Box } from '@material-ui/core'
import { Layout, Slider } from '../../../components'

import StartBlog from './components/StartBlog'
import TwoScreen from './components/TwoScreen'

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