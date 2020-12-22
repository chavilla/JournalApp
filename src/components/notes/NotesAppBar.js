import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar, showSidebar } from '../../actions/ui';

const NotesAppBar = () => {

  const {x} = useSelector(state => state.ui);   

  const dispatch=useDispatch();

    const handleToggle = () => {
      if (x===-100) {
        dispatch(showSidebar())
      }
      else{
        dispatch(hideSidebar())
      }
  }

    return (
        <div className='notes__appbar'>
          <div className='notes__appbar-menuIcon' onClick={ ()=>handleToggle() }>
            <i className="fas fa-bars"></i>
          </div>
          <span>28 de Diciembre de 2020</span>
          <div>
              <button className='btn'>Picture</button>
              <button className='btn'>Save</button>
          </div>
        </div>
    )
}

export default NotesAppBar
