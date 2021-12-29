import React from 'react'
import StartedBlog from './component/StartedBlog'
import AnswerGroup from './component/AnswerGroup'
import { makeStyles } from '@material-ui/core/styles';
import { Slider, Layout } from '../../../components'

import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

}));


const MediaAboutUs = () => {
    const classes = useStyles()
    return (
        <Layout>
            <StartedBlog />
            <AnswerGroup />
            <Box style={{ marginTop: 100, marginBottom: 100 }}>
                <Slider />
            </Box>
        </Layout>
    )
}

export default MediaAboutUs