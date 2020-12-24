import React from 'react';

const NoteScreen = () => {
    return (
        <div className='notes__main-content'>

            <div className='notes__content'>
                <input 
                className='notes__title-input'
                type='text'
                placeholder='Some awesome title'
                autoComplete='off'
                />

                <textarea 
                className='notes__textarea'
                placeholder='what happened today?'
                >
                </textarea>
                <div className='notes__image'>
                    <img
                        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
                        alt='image' 
                    />
                </div>
            </div>

        </div>
    )
}

export default NoteScreen
