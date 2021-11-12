import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../../components/layout'
import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import API from '../../api'

const useStyles = makeStyles(() => ({
    container: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    image: {
        width: '50%',
        objectFit: 'cover',
    },
    dateStyle: {
        marginBottom: 30,
        marginTop: 20,
    },
    tagStyle: {
        cursor: 'pointer',
        color: '#7bd094',
        '&:hover': {
            color: "#3a8762",
        },
    },
    box: {
        border: '0.5px solid gray',
        width: '50%',
        padding: 20,
        marginBottom: 100
    }
}))

const BlogInside = () => {
    const classes = useStyles()
    const [body, setBody] = useState()
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const params = useParams()
    useEffect(() => {
        API.getPostsDetail(params.id).then((res) => {
            console.log(res)
            setBody(res.data.body)
            setTitle(res.data.title)
            setDate(new Date(res.data.created).toLocaleDateString())
        })
    }, [])
    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h4" >{title}</Typography>
                <Typography variant="body1" className={classes.dateStyles}>{date}//<span className={classes.tagStyle}>Социяальные новости</span></Typography>
                <div dangerouslySetInnerHTML={{ __html: body }}>

                </div>
                <Box>
                    <Typography variant="h6">МАТЕРИАЛЫ ПО ТЕМЕ</Typography>
                    <Box className={classes.box}>
                        <Box >
                            <Typography variant="body1" className={classes.tagStyle}>Мы могли бы не доводить наших пациентов до трансплантации печени</Typography>
                            <Typography variant="body2">07.07.2021//НОВОСТИ ПРОЕКТА</Typography>
                        </Box>
                        <Box style={{ marginTop: 10 }}>
                            <Typography variant="body1" className={classes.tagStyle}>Начинаем сбор заявлений на оплату авиабилетов для консультации в Федеральном центре трансплантологии</Typography>
                            <Typography variant="body2">07.07.2021//НОВОСТИ ПРОЕКТА</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default BlogInside