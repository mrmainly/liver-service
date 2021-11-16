import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

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
    const [news, setNews] = useState([])
    const [count, setCount] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState()
    useEffect(() => {
        const getPosts = async () => {
            API.getPosts(currentPage, offset).then((res) => {
                setNews(res.data.results)
                setCount(res.data.count)
            })
        }
        getPosts()
    }, [currentPage])

    let countNumber = Math.ceil(count / 10)

    return (
        <Layout>
            <Container>
                <div className={classes.root}>
                    <FirstBlog />
                    <NewsCardBlock data={news} />
                    <Pagination count={countNumber} onChange={(event, value) => setCurrentPage(value)} />
                </div>
            </Container>
        </Layout>
    )
}

export default Blog