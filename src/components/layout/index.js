import React, { useReducer } from 'react'
import Header from './Header'
import Footer from './Footer'
import Notification from '../notification'
import { stateReducer } from '../../reducer'

import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import { DispatchContext, StateContext, defaultStore } from '../../store/index'

const useStyles = makeStyles(() => ({
    container: {
        minHeight: 600
    }
}))

const Layout = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, defaultStore)
    const classes = useStyles()
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <Header />
                <Notification />
                <Box className={classes.container}>
                    {children}
                </Box>
            </StateContext.Provider>
        </DispatchContext.Provider >
    )
}

export default Layout