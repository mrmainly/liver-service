import React, { useReducer } from 'react'
import Header from './Header'
import Footer from './Footer'
import Notification from '../notification'
import { stateReducer } from '../../reducer'
import LoginModal from '../modals/LoginModal'
import RegisterModal from '../modals/RegisterModal'

import { DispatchContext, StateContext, defaultStore } from '../../store/index'

const Layout = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, defaultStore)
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <LoginModal />
                <RegisterModal />
                <Header />
                <Notification />
                {children}
                <Footer />
            </StateContext.Provider>
        </DispatchContext.Provider >
    )
}

export default Layout