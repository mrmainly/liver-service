import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { Container } from '@material-ui/core'

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
            <Container>
                <div className={classes.root}>
                    <FirstBlog />
                    <NewsCardBlock data={news} />

                    <Pagination count={10} style={{ marginTop: 20 }} />
                </div>
            </Container>
        </Layout>
    )
}

export default Blog