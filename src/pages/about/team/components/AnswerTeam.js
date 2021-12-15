import React from 'react'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 120,
        paddingTop: 120,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            paddingTop: 50,
            paddingBottom: 30,
            backgroundImage: 'none',
        },
        color: 'black',
        backgroundImage: `url(${"/image/Group20.png"})`,
        marginTop: 70,
        backgroundSize: 'cover',
    },
    card: {
        marginTop: 35,
        marginLeft: 15,
        marginRight: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        textAlign: 'center',
    },
    title__blue: {
        color: '#22A2FF',
        textTransform: 'uppercase',
        marginBottom: 20,
        marginTop: '-25px',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0
        },
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0
        }
    }
}));

const AnswerTeam = () => {
    const classes = useStyles()
    const object = [
        {
            title: 'Командный дух',
            description: 'Мы “Dream team” благодаря чувству командного духа. Это территория эмпатии, юмора и добродушия. Для нас важно развиваться и поддерживать друг друга плечом к плечу.',
        },
        {
            title: 'Гибкость',
            description: 'Мыслить и работать намного эффективнее и приятнее, используя гибкий подход. А также уметь действовать здесь и сейчас.',
        },
        {
            title: 'Позитивный настрой',
            description: 'Мы уверенно смотрим вперед и ценим вклад каждого. Даже в самые тяжелые моменты все убеждены, что справятся.',
        },
        {
            title: 'Проактивность',
            description: 'Мы команда, которая проявляет инициативу и принимает вывоз. Мы ценим легкость на подъем и ищем лучшие способы решения задач.',
        },
        {
            title: 'Вовлеченность',
            description: 'Наши глаза горят во время процесса работы. Нам нравится то, что мы делаем. Благодаря данной ценности мы способны добиваться высоких результатов.',
        },
        {
            title: 'Уважение и доверие',
            description: 'Для нас супер важно, чтобы царила атмосфера взаимного уважения. Мы ценим доверие, как воздух. Поскольку мы дышим легко и привольно в такой командной культуре. Каждый в команде может рассчитывать на коллег.',
        },
    ]

    return (
        <Container className={classes.content}>
            <Typography className={classes.title__blue}>Наша ценности</Typography>
            <Typography variant="h4" className={classes.title}>Мы строим слоган<br /> из двух строчек</Typography>

            <Grid container className={classes.container}>
                {object.map((item, index) => (
                    <Grid item key={index} className={classes.card} lg={3} sm={12} md={5} xl={3} xs={12}>
                        <img src={'/image/Group225.png'} style={{ width: 40, height: 40, marginRight: 10 }} alt={''} />
                        <Box>
                            <Typography variant="h5" >{item.title}</Typography>
                            <Typography >{item.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>


        </Container>
    )
}

export default AnswerTeam