import React from 'react'
import Layout from '../../components/layout/Layout'
import FirstBlog from './components/FirstBlog'
import { makeStyles } from '@material-ui/core/styles'
import TeamCardBlog from './components/TeamCardBlog'


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
                <TeamCardBlog />

                {/* <Events />
                <AttainmentCard />
                <MondinoCard />
                <ArticleCards /> */}
            </div>
        </Layout>
    )
}

export default Blog