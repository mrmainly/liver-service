import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, MyContainer, PageHeader } from '../../../components'

import { Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    Text: {
        marginTop: 50
    }
}))

const SisterCare = () => {
    const classes = useStyles()
    const text = [
        'Отделение сестринского ухода является структурным подразделением ГАУ РС (Я) «Республиканская клиническая больница №3» и организовано с целью повышения доступности медицинской помощи пациентам, нуждающимся в круглосуточном сестринском уходе, при отсутствии медицинских показаний для постоянного наблюдения врача. В отделении проводится динамическое наблюдение за состоянием пациентов и контроль за витальными функциями. Отделение использует потенциал всех подразделений ГАУ РС (Я) "Республиканская клиническая больница №3" для успешной диагностики и лечения пациентов.',
        'В новом отделении сестринского ухода предусмотрено 15 коек для тяжелобольных пациентов преимущественно пожилого возраста. Среди них люди с различными формами деменции — с болезнью Альцгеймера, хроническими прогрессирующими заболеваниями в терминальной стадии, последствиями инсульта — острого нарушения мозгового кровообращения и т.д. Также в отделение направляются люди пожилого возраста по социально -психологическими показаниям (с частичной или полной потерей способности к самообслуживанию и т.д.).',
        'Основные медицинские показания для госпитализации пациентов в отделение. ',
        '- Неизлечимые прогрессирующие заболевания, в том числе онкологические, требующие проведения круглосуточного поддерживающего лечения и сестринского ухода, при отсутствии медицинских показаний для лечения в отделениях паллиативной медицинской помощи или хосписах.',
        '- Последствия травм и острых нарушений мозгового кровообращения, требующие круглосуточного сестринского ухода, при отсутствии медицинских показаний для лечения в отделениях паллиативной медицинской помощи или хосписах. ',
        '- Иные заболевания (состояния), сопровождающиеся ограничениями жизнедеятельности и мобильности различной степени и требующие проведения круглосуточного поддерживающего лечения и (или) сестринского ухода, при отсутствии медицинских показаний для лечения в отделениях паллиативной медицинской помощи или хосписах.',
        'В отделение сестринского ухода могут госпитализироваться для проведения курса поддерживающего, симптоматического лечения больные пожилого и старческого возраста; одинокие пациенты, нуждающихся по состоянию здоровья в медицинском и социальном уходе, при отсутствии возможности организовать уход на дому.',
        'Со всеми возникшими вопросами по госпитализации в отделение сестринского ухода можно обратиться к заместителю главного врача по медицинской части Никифоровой Вере Дмитриевне, по тел. 507-216 (3683) , или в дни приема граждан: ул. Кирова, 34, каб. 308 среда с 15.00-16.00 Важно: При госпитализации иметь при себе: - паспорт, страховой медицинский полис, СНИЛС - результат ПЦР на COVID-19 сроком до 3 –х дней - результат мокроты КУМ 3-х кратно срок  действия 1 год (нетранспортабельным пациентам)) - результаты анализов и обследований (при наличии) - выписки из стационара (при наличии)'
    ]
    return (
        <Layout>
            <MyContainer style={{ marginTop: 100, marginBottom: 100 }} wrapper={true} >
                <PageHeader title="Отделение сестринского ухода" fontSize={35} />
                {text.map((item, index) => (
                    <Typography variant="h6" key={index} className={classes.Text}>{item}</Typography>
                ))}
                <Typography variant="h6" className={classes.Text}>
                    Источник: сайт Республиканской клинической больницы №3 <span><a target="_blank" href="http://rb3.ykt.ru/">http://rb3.ykt.ru/</a></span>
                </Typography>
            </MyContainer>
        </Layout>
    )
}

export default SisterCare