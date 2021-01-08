import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({id, date, title, body, url }) => {

    const noteDate=moment(date);
    const dispatch = useDispatch();

    const handleActiveNote = () => {
        dispatch(activeNote(id, { date, title, body, url }));
    }

    return (
        <div className='journal__entry animate__animated animate__fadeIn' onClick={ handleActiveNote}>
           { url && 
           <div className='journal__entry-picture'
                style={{
                    backgroundImage: `url(${url ? url : process.env.PUBLIC_URL + '/public/empty.png' })`,
                    backgroundSize: 'cover'
                }}
            >
            </div>}
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    { title==='' ? 'No Title' : `${title}`  }
                </p>
            </div>
            <div className='journal_entry-date'>
                { noteDate.format('LL') }
            </div>
        </div>
    )
}

export default JournalEntry
