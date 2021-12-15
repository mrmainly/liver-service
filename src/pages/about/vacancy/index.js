import React from 'react'

import { Container } from '@material-ui/core'
import { Layout, PageHeader } from '../../../components'

const Vacancy = () => {
    return (
        <Layout>
            <Container>
                <PageHeader title="Вакансии" description='это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' />
            </Container>
        </Layout>
    )
}

export default Vacancy