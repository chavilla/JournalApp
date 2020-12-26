import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';
import { hideSidebar, showSidebar } from '../../actions/ui';

const NotesAppBar = () => {

  const { ui:{x}, note: { noteActive } } = useSelector(state => state);   

  const dispatch=useDispatch();

    const handleToggle = () => {
      if (x===-100) {
        dispatch(showSidebar())
      }
      else{
        dispatch(hideSidebar())
      }
  }

  const handleUpdateNote = () => {
    dispatch(startSaveNote(noteActive));
  }

    return (
        <div className='notes__appbar'>
          <div className='notes__appbar-menuIcon' onClick={ ()=>handleToggle() }>
            <i className="fas fa-bars"></i>
          </div>
          <span>{ `${ new Date().getDate() }/${new Date().getMonth()+ 1}/${new Date().getFullYear()}` }</span>
          <div>
              <button className='btn'>Picture</button>
              <button className='btn'
              onClick = { handleUpdateNote }
              >Save</button>
          </div>
        </div>
    )
}

export default NotesAppBar
