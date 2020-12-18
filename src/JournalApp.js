import React, { useState } from 'react';
import { ShowContext } from './components/context/showContext';
import AppRouter from './components/routers/AppRouter';

const JournalApp = () => {

    const [show, setShow] = useState(false)

    return (
        <ShowContext.Provider value={{
            show,
            setShow
        }}>
            <AppRouter />
        </ShowContext.Provider>
    )
}

export default JournalApp
