import React, { useEffect, useState } from 'react'

import { Container, Box, Typography } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

import { Layout, PageHeader } from '../../../components'

const ValunteersDetail = () => {
    const location = useLocation()
    return (
        <Layout>
            <Container>
                <Box style={{ paddingTop: 100, marginBottom: 100 }}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        <Typography variant="h4">{location.state.name}</Typography>
                        <Typography variant="h4" style={{ color: 'rgba(42, 95, 167, 1)' }}>{location.state.price} руб</Typography>
                    </Box>
                    <div dangerouslySetInnerHTML={{ __html: location.state.description }}>

                    </div>
                </Box>
            </Container>
        </Layout>
    )
}

export default ValunteersDetail