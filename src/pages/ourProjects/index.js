import React from 'react'

import { Container, Box, MenuItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { Layout } from '../../components'

const useStyles = makeStyles(() => ({
    menu: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
    },
    container: {
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'end'
    },
    menu_link: {
        textDecoration: 'none',
        color: 'black',
    }
}))

const OurProjects = () => {
    const classes = useStyles()
    const jsonLinks = [
        {
            title: 'Проект "Школа домашнего ухода"',
            links: [
                {
                    link: '/school/organizationLife',
                    label: 'Организация быта',
                },
                {
                    link: '/school/preventionOfFalls',
                    label: 'Профилактика падений',
                },
                {
                    link: '/school/feeding',
                    label: 'Кормление, зондовое питание, смеси',
                },
                {
                    link: '/school/pain',
                    label: 'Боль',
                },
                {
                    link: '/school/complication',
                    label: 'Осложнение(пролежни, тробозы, пневмония,  обезвоживоние)',
                },
                {
                    link: '/school/rehabilitation',
                    label: 'Подбор технических средств реабилитации',
                },
                {
                    link: '/school/hygiene',
                    label: 'Гигиена',
                },
                {
                    link: '/school/featuresOfCare',
                    label: 'Особенности ухода за стомированными пациентами',
                },
                {
                    link: '/school/dementia',
                    label: 'Деменция',
                },
                {
                    link: '/school/stroke',
                    label: 'Инсульт',
                },
                {
                    link: '/school/psychologicalAspects',
                    label: 'Психологические аспекты',
                },

            ]
        },
        {
            title: 'Lorem',
            links: [
                {
                    link: '/school/seriouslyIllFamily',
                    label: 'Проект по респисной помощи семьям с тяжелобольными пациентами',
                },
                {
                    link: '/school/helpPalliative',
                    label: 'Ресурсный центр поддержки семей с паллиативными пациентами',
                },
                {
                    link: '/school/dementiaNo',
                    label: 'Проект "Деменции нет"',
                },
                {
                    link: '/school/donation',
                    label: 'Спецпроекты по донорству',
                },
            ]
        }
    ]
    return (
        <Layout>
            <Container className={classes.container}>
                <Box className={classes.menu}>
                    {jsonLinks.map((item, index) => (
                        <Box key={index}>
                            <Typography variant="h6">{item.title}</Typography>
                            {item.links.map((itemLink, index) => (
                                <Link key={index} to={itemLink.link} className={classes.menu_link}>
                                    <MenuItem>{itemLink.label}</MenuItem>
                                </Link>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Layout>
    )
}

export default OurProjects