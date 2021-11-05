import React from 'react'
import Layout from '../../components/layout'
import StartedBlog from './component/StartedBlog'
import AnswerGroup from './component/AnswerGroup'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));


const About = () => {
    const classes = useStyles()
    return (
        <Layout>
            <StartedBlog />
            <div className={classes.container}>
                <AnswerGroup />
                {/* <SliderMorePhone title={"Скачай Pocket medic и получай промокоды на все медицинские услуги"} /> */}
            </div>
        </Layout>
    )
}

export default About