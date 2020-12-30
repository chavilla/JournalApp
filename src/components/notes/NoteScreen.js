import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleteNotes } from "../../actions/notes";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const dispatch = useDispatch();
  const { noteActive: note } = useSelector((state) => state.note);
  const [value, handleChange, reset] = useForm(note);
  const { title, body } = value;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(value.id, { ...value }));
  }, [dispatch, value]);

  const handleDelete = () => {
    dispatch(startDeleteNotes(note.id))
  }

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleChange}
        />

        <textarea
          className="notes__textarea"
          placeholder="what happened today?"
          name="body"
          value={body}
          onChange={handleChange}
        ></textarea>
        <div className="notes__image">
          {note.url && (
            <img
              src={ note.url}
              alt="note"
            />
          )}
        </div>

        <button className='btn btn-danger' onClick={ handleDelete } type='button'>Delete</button>

      </div>
    </div>
  );
};

export default NoteScreen;
