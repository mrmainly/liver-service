import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Layout } from '../../../components'
import FirstBlog from './components/FirstBlog'
import SliderTeam from './components/SliderTeam'
import DreamTeam from './components/DreamTeam'
import AnswerTeam from './components/AnswerTeam'
import MapScreen from './components/MapScreen'

const useStyles = makeStyles((theme) => ({
    container: {
        background: `linear-gradient(145.24deg, rgba(58, 113, 253, 0.25) 14.79%, rgba(183, 225, 255, 0) 61.66%), radial-gradient(46.05% 156.8% at 84.98% 128.33%, rgba(89, 106, 255, 0.25) 0%, rgba(68, 75, 255, 0) 100%), #B7E1FF`,
        backgroundSize: 'cover'
    },
    answerContainer: {
        backgroundImage: `url(${"/image/Element/asd.png"})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    MediaContainer: {
        backgroundSize: 'cover',
        backgroundImage: `url(${"/image/Element/fg.png"})`
    }
}));

const Team = () => {
    const classes = useStyles()
    return (
        <Layout>
            <div className={classes.container}>
                <FirstBlog />
            </div>
            <SliderTeam />

            <DreamTeam />
            <div className={classes.answerContainer}>
                <AnswerTeam />
            </div>
            <MapScreen />
        </Layout>
    )
}

export default Team