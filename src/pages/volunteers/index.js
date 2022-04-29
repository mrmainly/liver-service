import React, { useEffect, useState } from 'react'

import { Container, Box } from '@material-ui/core'

import DataVolunteers from '../../Data/DataVolunteers'
import { Layout, PageHeader } from '../../components'
import CommonCardConstructor from '../../constructor/CommonCardConstructor'
import API from '../../api'

const Valunteers = () => {
    const [data, setData] = useState([])
    useEffect(() => (
        API.getVolunteers().then((res) => {
            console.log('val', res)
            setData(res.data.results)
        })
    ), [])
    return (
        <Layout>
            <Container>
                <Box style={{ paddingTop: 100, marginBottom: 100 }}>
                    <PageHeader title="Волонтерам" />
                    <CommonCardConstructor data={data} />
                </Box>
            </Container>
        </Layout>
    )
}

export default Valunteers