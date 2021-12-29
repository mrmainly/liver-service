import React from 'react'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { PageHeader } from '../../../../components'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        flexDirection: 'column'
    },
    card: {
        marginTop: 35,
        border: '3px solid #51A5D5',
        borderRadius: 15,
        padding: 20
    },
    title: {
        marginBottom: 30,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: 30,
            color: 'black'
        },
    },
    box_title: {
        [theme.breakpoints.down('sm')]: {
            color: 'white'
        },
    },
    icon: {
        width: 50,
        height: 50,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
}));

const SentenceAbout = () => {
    const classes = useStyles()
    const object = [
        {
            title: 'Выгодно',
            description: 'С 2014 года мы реализуем проект «Надежда на будущее». Этот проект осуществляется в благодарность нашим Донорам, которые пожертвовали частичку себя для того, чтобы мы могли жить полноценной жизнью. Мы радуемся каждому дню, которого не было бы, если бы не наши Доноры.',
        },
        {
            title: 'Точность',
            description: 'Проект задумывался для того, чтобы рассказать людям как сохранить здоровье почек и печени. Как и любой социальный проект, «Надежда на будущее»  — это опыт гражданской активности, который осуществляется при сотрудничестве с государственными, общественными организациями, врачами и просто людьми, которые хотят помочь другим.',
        },
        {
            title: 'Технологичность',
            description: 'В 2014 году мы начали работать в Якутии с нашей программой «Грамотный пациент» — раздавали брошюры и оказывали информационную поддержку пациентам. Через год, мы познакомились с руководством Некоммерческого партнерства «Ассоциация частных медицинских клиник и центров Якутии» во время семинара для НКО. Это стало важным моментом развития проекта. В 2015 г., наша команда с Ассоциацией провела Всемирный День Почки в Якутске. Так развивалась наша флагманская программа «Профилактика и лечение заболеваний почек», а Ли Валерия Спиридоновна стала нашим амбассадором. В составе социальных проектов Ассоциации, мы провели 4 Всемирных Дня Почки в Якутске и в улусах республики. В поддержку развития донорства органов и в помощь пациентам с терминальными стадиями заболеваний почек, провели успешно две благотворительные фестивали «Надежда на будущее».  Сегодня мы реализуем второй социальный проект «Дар жизни» — в поддержку прижизненных доноров органов, проживающих на территории Республики Саха (Якутия). Это наше «спасибо» отцам, матерям, братьям, сестрам — за жизнь, которую они подарили нам. Этот проект Ассоциации, стал победителем первого конкурса 2020 г. Фонда Президентских грантов.',
        },
    ]

    return (
        <Container className={classes.container}>
            <PageHeader title="О преокте" />
            <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                {object.map((item, index) => (
                    <Grid item key={index} className={classes.card} lg={12} sm={12} md={12} xl={12} xs={12}>
                        <Typography variant="h6">{item.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default SentenceAbout