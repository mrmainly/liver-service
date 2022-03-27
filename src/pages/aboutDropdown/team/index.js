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
        background: `#FFAB7E`,
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
        </Layout>
    )
}

export default Team