import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingNotes } from '../../actions/notes';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {


    const dispatch = useDispatch();

    const { note, auth: { uid } } = useSelector(state => state);

    useEffect(()=>{
        dispatch(startLoadingNotes(uid));
    },[dispatch, uid]);


    return (
        <div className='journal__entries'
        style = {{
            overflow:'hidden'
        }}
        >
            {
                note.notes.length===0 &&
                <p className=''>You do not have any note</p>
            }
            {
                note.notes.map( note => (
                    <JournalEntry 
                    key={ note.id }
                    {...note}
                    />
                ) )
            }
        </div>
    )
}

export default JournalEntries
