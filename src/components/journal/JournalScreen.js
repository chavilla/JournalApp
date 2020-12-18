import React from 'react'
import NoteScreen from '../notes/NoteScreen';
import Sidebar from './layout/Sidebar';
//import NothigSelected from './NothigSelected';

const JournalScreen = () => {
    return (
        <div className='journal__main-content'>
            <Sidebar />

            <main>
               {/* <NothigSelected /> */}
               <NoteScreen />
            </main>
        </div>
    )
}

export default JournalScreen;