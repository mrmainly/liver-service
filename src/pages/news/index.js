import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import API from '../../api'
import Layout from '../../components/layout'
import FirstBlog from './components/FirstBlog'
import NewsCardBlock from './components/NewsCardBlock'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 100
    },
}));

const Blog = () => {
    const classes = useStyles()
    const [news, setNews] = useState()
    useEffect(() => {
        API.getPosts().then((res) => {
            setNews(res.data)
            console.log('news', res.data)
        })
    }, [])

    return (
        <Layout>
            <div className={classes.root}>
                <FirstBlog />
                <NewsCardBlock data={news} />
            </div>
        </Layout>
    )
}

export default Blog