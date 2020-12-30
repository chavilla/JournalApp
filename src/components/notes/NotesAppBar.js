import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";
import { hideSidebar, showSidebar } from "../../actions/ui";

const NotesAppBar = () => {
  
  const {
    ui: { x },
    note: { noteActive },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (x === -100) {
      dispatch(showSidebar());
    } else {
      dispatch(hideSidebar());
    }
  };

  const handleUpdateNote = () => {
    dispatch(startSaveNote(noteActive));
  };

  const handlePictureSave = () =>{
    document.querySelector('#file').click();
  }

  const handleChangeFile = (e) =>{

    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  }

  return (
    <div className="notes__appbar">
      <div className="notes__appbar-menuIcon" onClick={() => handleToggle()}>
        <i className="fas fa-bars"></i>
      </div>

      <span>{`${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`}</span>

      <input 
        id='file'
        name='file'
        type='file'
        style={{display:'none'}}
        onChange={ handleChangeFile }

      />

      <div>
        <button className="btn" onClick={ handlePictureSave }>Picture</button>
        <button className="btn" onClick={handleUpdateNote}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
