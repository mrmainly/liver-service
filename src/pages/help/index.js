import React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { Layout, PageHeader } from '../../components'
import FaqScreen from './components/FaqScreen';
import FormFeedBack from './components/FormFeedback'

const Help = () => {
    return (
        <Layout>
            <Container style={{ marginTop: 100, marginBottom: 100 }}>
                <PageHeader title="Помощь" />
                <FaqScreen />
                <FormFeedBack />
            </Container>
        </Layout>
    )
}

export default Help