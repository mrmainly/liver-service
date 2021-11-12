import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../../components/layout'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import API from '../../api'

const useStyles = makeStyles(() => ({
    container: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    image: {
        width: '50%',
        objectFit: 'cover',
    }
}))

const BlogInside = () => {
    const classes = useStyles()
    const [body, setBody] = useState()
    const [title, setTitle] = useState()
    const [img, setImg] = useState()
    const params = useParams()
    useEffect(() => {
        API.getPostsDetail(params.id).then((res) => {
            console.log(res)
            setBody(res.data.body)
            setTitle(res.data.title)
            setImg(res.data.title_image)
        })
    }, [])
    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h4" style={{ marginBottom: 50 }}>{title}</Typography>
                <div dangerouslySetInnerHTML={{ __html: body }}>

                </div>
            </Container>
        </Layout>
    )
}

export default BlogInside