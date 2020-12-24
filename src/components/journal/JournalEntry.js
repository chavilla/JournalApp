import React from 'react'

const JournalEntry = ({note}) => {
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
                    Hola
                </p>
            </div>
        </div>
    )
}

export default JournalEntry
