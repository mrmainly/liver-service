import React from 'react'
import Layout from '../../components/layout'
import StartedBlog from './component/StartedBlog'
import AnswerGroup from './component/AnswerGroup'
import { makeStyles } from '@material-ui/core/styles';
import { Slider } from '../../components'

import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

}));


const About = () => {
    const classes = useStyles()
    return (
        <Layout>
            <StartedBlog />
            <AnswerGroup />
            <Box style={{ marginTop: 100 }}>
                <Slider />
            </Box>
        </Layout>
    )
}

export default About