import React from 'react'
import { useSelector } from 'react-redux';
import NoteScreen from '../notes/NoteScreen';
import Sidebar from './layout/Sidebar';
import NothigSelected from './NothigSelected';

const JournalScreen = () => {

    const  { noteActive }  = useSelector(state => state.note);

    return (
        <div className='journal__main-content animate__animated animate__fadeIn animate__faster'>
            <Sidebar />

            <main>
                {
                    (noteActive) 
                    ?
                    <NoteScreen />
                    :
                     <NothigSelected />
                }
            </main>
        </div>
    )
}

export default JournalScreen;