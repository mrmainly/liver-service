import React from 'react'

import { Container } from '@material-ui/core'

import DataVolunteers from '../../Data/DataVolunteers'
import { Layout, PageHeader } from '../../components'
import CommonCardConstructor from '../../constructor/CommonCardConstructor'

const Valunteers = () => {
    return (
        <Layout>
            <Container>
                <PageHeader title="Волонтерам" description='это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' />
                <CommonCardConstructor data={DataVolunteers} />
            </Container>
        </Layout>
    )
}

export default Valunteers