import React from 'react'

import { Container } from '@material-ui/core'

import DataVacancy from '../../Data/DataVacancy'
import { Layout, PageHeader } from '../../components'
import CommonCardConstructor from '../../constructor/CommonCardConstructor'


const Vacancy = () => {
    return (
        <Layout>
            <Container style={{ paddingTop: 100 }}>
                <PageHeader title="Вакансии" />
                <CommonCardConstructor data={DataVacancy} />
            </Container>
        </Layout>
    )
}

export default Vacancy