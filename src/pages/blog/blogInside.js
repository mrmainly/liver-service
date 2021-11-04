import React from 'react'

import Layout from '../../components/layout/Layout'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import InfoBlock from './components/InfoBlock'

const useStyles = makeStyles(() => ({
    container: {
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

const BlogInside = () => {
    const classes = useStyles()
    const Information = [
        'В декабре 2020 года из-за сложной эпидемиологической обстановки Demo Day IV потока Акселератора Б8 был проведен в онлайн-формате. В рамках 4 батча акселератора из 53 заявленных проектов в 1-й этап было отобрано 16 команда. Нашей команде удалось пройти отбор во 2-ой этап акселерации. Всего было отобрано 6 команд.',
        'Всем шести командам-выпускникам подарили фирменный мерч акселератора, а также финансирование от Фонда развития инноваций РС(Я) на 22 тысячи долларов на продвижение проектов.',
        'Наша команда получила ценный опыт выступления и фидбэки по проекту от менторов и экспертов. Отдельная благодарность коммьюнити акселератора за оказание колоссальной поддержки и ценным советам за столь короткие сроки. Стоит отметить, что в первом этапе проводилась интенсивная образовательная программа по методике профессора MIT (Массачусетский технологический университет) Билла Олега «Путеводитель предпринимателя». Благодаря этому наша команда получила бесценные знания, которые мы применяем сейчас и будем использовать в дальнейшем. '
    ]
    return (
        <Layout>
            <Container className={classes.container}>
                {/* <PageHeader description="О том, как наша команда прошла самый северный акселератор инновационных проектов." title={'“Доверяем решительным”-B8'} name="Блог" /> */}
                {Information.map((item, index) => (
                    <InfoBlock key={index} text={item} />
                ))}
            </Container>
        </Layout>
    )
}

export default BlogInside