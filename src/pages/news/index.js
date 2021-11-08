import React from 'react'
import Layout from '../../components/layout'
import FirstBlog from './components/FirstBlog'
import { makeStyles } from '@material-ui/core/styles'
import NewsCardBlock from './components/NewsCardBlock'


const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const Blog = () => {
    const classes = useStyles()
    return (
        <Layout>
            <div className={classes.root}>
                <FirstBlog />
                <NewsCardBlock />
            </div>
        </Layout>
    )
}

export default Blog