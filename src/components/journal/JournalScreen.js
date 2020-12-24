import React from 'react'
import { useSelector } from 'react-redux';
import NoteScreen from '../notes/NoteScreen';
import Sidebar from './layout/Sidebar';
import NothigSelected from './NothigSelected';

const JournalScreen = () => {

    const  { noteActive }  = useSelector(state => state.note);
    
    console.log(noteActive);

    return (
        <div className='journal__main-content'>
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