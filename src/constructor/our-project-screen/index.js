import React from 'react'

import { Box, Grid, Typography } from '@material-ui/core'
import { MyContainer, CardUsefulLink, YellowSeparator } from '../../components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    flexBox: {
        display: 'flex',

    }
});


const OurProjectScreen = ({ pageHeader, ...props }) => {
    const classes = useStyles()
    const array = [
        {
            img: '/image/Rectangle75.png',
            description: 'Школа домашнего ухода',
            Link: '/home-care-school'
        },
        {
            img: '/image/Rectangle175.png',
            description: 'Ресурсный центр поддержки семей с паллиативными пациентами',
            Link: '/help-family'
        },
        {
            img: '/image/Rectangle1754.png',
            description: 'Проект “Деменции нет”',
            Link: '/dementiaNo'
        },
        {
            img: '/image/Rectangle1752.png',
            description: 'Спецпроекты по донорству',
            Link: '/donation'
        },
    ]
    return (
        <Box {...props}>
            <MyContainer wrapper={false}>
                {pageHeader ?
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <YellowSeparator />
                        <Typography variant="h4" style={{ marginBottom: 20, color: '#F2A340' }}>Наши проекты</Typography>
                    </Box>
                    : ''}
                <Grid className={classes.flexBox} container>
                    {array.map((item, index) => (
                        <Grid key={index} item lg={3} xl={3} md={3} sm={6} xs={12}>
                            <CardUsefulLink img={item.img} description={item.description} link={item.Link} />
                        </Grid>
                    ))}
                </Grid>
            </MyContainer>
        </Box>
    )
}

export default OurProjectScreen