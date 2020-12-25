//import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({id, date, title, body, url }) => {

    //const noteDate=moment(date);
    const dispatch = useDispatch();

    const handleActiveNote = () => {
        dispatch(activeNote(id, { date, title, body, url }));
    }

    return (
        <div className='journal__entry' onClick={ handleActiveNote}>
           { url && 
           <div className='journal__entry-picture'
                style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg)',
                    backgroundSize: 'cover'
                }}
            >
            </div>}
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    { title==='' ? 'No Title' : `${title}`  }
                </p>
            </div>
            <div className=''>
                { /*noteDate.format('dddd')*/ 
                    date
                }
            </div>

        </div>
    )
}

export default JournalEntry
