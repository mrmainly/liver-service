import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardCustom from '../../../components/card/CardCustom'

const useStyles = makeStyles(() => ({
    title__yellow: {
        color: '#FFD439'
    },
    title: {
        marginBottom: 30
    },
}))

const NewsCardBlock = () => {
    const classes = useStyles()
    const object = [
        {
            img: '/image/Element/kreatin.jpg',
            description: '10 июня состоялся Круглый стол, посвященный 20-летию развития трансплантации органов в Якутии. Мы предлагаем ознакомиться с транскрипцией выступления Слепцовой Снежаны Спиридоновны — зам. директора по научной работе МИ СВФУ, доцента, д.м.н., зав. кафедрой инфекционных болезней. Она также озвучила, что республике жизненно необходим современный гепатоцентр. В этом направлении работает и общественная пациентская организация «Здоровая печень» — наш социальный партнер. Круглый стол состоялся в рамках социальных проектов, поддержанных Фондом президентских грантов. Он прошел в формате офлайн и онлайн в СахаМедиа.  [»]',
            title: 'Мы могли бы не доводить наших пациентов до трансплантации печени',
            id: '1',
            date: '30.08.2021'
        },
        {
            img: '/image/Element/kreatin.jpg',
            description: 'В рамках социального проекта «Надежда на будущее», Ассоциации частных медицинских клиник и центров Якутии, мы начинаем сбор заявок на оплату проезда в НМИЦ трансплантологии и искусственных органов им. академика В.И. Шумакова Минздрава России. Оплата авиабилетов по маршруту Якутск-Москва-Якутск осуществляется за счет средств Фонда Президентских Грантов.  [»]',
            title: 'Начинаем сбор заявлений на оплату авиабилетов для консультации в Федеральном центре трансплантологии',
            id: '2',
            date: '30.08.2021'
        },
        {
            img: '/image/Element/kreatin.jpg',
            description: 'Сегодня, 4 декабря 2020 г, состоятся удаленные выборы Председателя. Место проведения- whatsapp. Время: 20:00. Было рассмотрено много вариантов проведения выборов (бюллетени в диализных центрах, зуум и тд) и решено, что голосовать будут Актив, который работал до выборов с предыдущим Председателем и новый Актив. В материале информация о кандидатах и об Активе.  [»]',
            title: 'Выборы Председателя общественной организации пациентов на гемодиализе',
            id: '3',
            date: '30.08.2021'
        },
        {
            img: '/image/Element/kreatin.jpg',
            description: 'Сегодня, 4 декабря 2020 г, состоятся удаленные выборы Председателя. Место проведения- whatsapp. Время: 20:00. Было рассмотрено много вариантов проведения выборов (бюллетени в диализных центрах, зуум и тд) и решено, что голосовать будут Актив, который работал до выборов с предыдущим Председателем и новый Актив. В материале информация о кандидатах и об Активе.  [»]',
            title: 'Выборы Председателя общественной организации пациентов на гемодиализе',
            id: '3',
            date: '30.08.2021'
        },
        {
            img: '/image/Element/kreatin.jpg',
            description: 'Сегодня, 4 декабря 2020 г, состоятся удаленные выборы Председателя. Место проведения- whatsapp. Время: 20:00. Было рассмотрено много вариантов проведения выборов (бюллетени в диализных центрах, зуум и тд) и решено, что голосовать будут Актив, который работал до выборов с предыдущим Председателем и новый Актив. В материале информация о кандидатах и об Активе.  [»]',
            title: 'Выборы Председателя общественной организации пациентов на гемодиализе',
            id: '3',
            date: '30.08.2021'
        },
    ]
    return (
        <Container>
            <Grid container style={{ marginTop: 50 }}>
                {object.map((item, index) => (
                    <Grid item key={index} lg={12} sm={12} md={12} xl={12} xs={12} className={classes.content}>
                        <CardCustom img={item.img} title={item.title} description={item.description} id={item.id} date={item.date} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default NewsCardBlock