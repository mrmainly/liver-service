import React from 'react'

import Layout from '../../components/layout'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import InfoBlock from './components/InfoBlock'

const useStyles = makeStyles(() => ({
    container: {
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

const BlogInside = () => {
    const classes = useStyles()
    const Information = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    ]
    return (
        <Layout>
            <Container className={classes.container}>
                {/* <PageHeader description="О том, как наша команда прошла самый северный акселератор инновационных проектов." title={'“Доверяем решительным”-B8'} name="Блог" /> */}
                {/* {Information.map((item, index) => (
                    <InfoBlock key={index} text={item} />
                ))} */}
            </Container>
        </Layout>
    )
}

export default BlogInside