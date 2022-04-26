import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import Slider from 'react-slick'

import { CardUsefulLink, YellowSeparator } from '../..'

const useStyles = makeStyles(() => ({
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 30
    }
}))

const UsefulLinks = () => {
    const [slidesToShow, setSlidesToShow] = useState()
    const classes = useStyles()
    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            }
            else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    const array = [
        {
            img: '/image/palliative.png',
            description: 'Про Паллиатив — все о помощи в конце жизни',
            Link: 'https://pro-palliativ.ru/'
        },
        {
            img: '/image/Group-367(1)2.png',
            description: 'Межрегиональная общественная организация нефрологических пациентов',
            Link: 'https://nephroliga.ru/'
        },
        {
            img: '/image/Group-362(2).png',
            description: 'Благотворительный фонд помощи пожилым людям и инвалидам',
            Link: 'https://starikam.org/'
        },
    ]

    return (
        <Box style={{ overflow: 'hidden', }}>
            <Container>
                <YellowSeparator />
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h4" style={{ marginBottom: 20, color: '#F2A340' }}>Полезные ссылки</Typography>
                </Box>
                <Slider {...settings} >
                    {array.map((item, index) => (
                        <Box key={index} >
                            <CardUsefulLink img={item.img} description={item.description} link={item.Link} />
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    )
}

export default UsefulLinks