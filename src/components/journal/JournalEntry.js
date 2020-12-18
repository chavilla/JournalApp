import React from 'react'

const JournalEntry = ({entry}) => {
    return (
        <div className='journal__entry'>
            <div className='journal__entry-picture'
                style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg)',
                    backgroundSize: 'cover'
                }}
            >
            </div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo día
                </p>
                <p className='journal__entry-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday 26</span>
            </div>
        </div>
    )
}

export default JournalEntry
