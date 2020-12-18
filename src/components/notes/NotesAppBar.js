import React, { useContext } from 'react'
import { ShowContext } from '../context/showContext'

const NotesAppBar = () => {

    const { show, setShow }=useContext(ShowContext);

    return (
        <div className='notes__appbar'>
          <div className='notes__appbar-menuIcon' onClick={ ()=>setShow(!show) }>
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
