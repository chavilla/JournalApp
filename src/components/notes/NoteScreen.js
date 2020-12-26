import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import useForm from "../../hooks/useForm";

const NoteScreen = () => {
  const dispatch = useDispatch();
  const { noteActive: note } = useSelector((state) => state.note);
  const [value, handleChange, reset] = useForm(note);
  const { title, body } = value;

  const activeId = useRef(note.id);

  useEffect(() => {
      console.log('Hola');
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(value.id, { ...value }));
  }, [dispatch, value]);

  return (
    <div className="notes__main-content">
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
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="note"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
