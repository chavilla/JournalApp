import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


//JournalApp

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(docRef.id, newNote));
    dispatch(addNewNote(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  }
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore);

    dispatch(refreshNote(note.id, noteToFireStore));

    alert('The note have been updated');

  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: {
      id,
      ...note
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {

    const { noteActive } = getState().note;

    Swal.fire({
      title: 'Uploading',
      text: 'Please wait ...',
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      }
    })

    const fileUrl = await fileUpload(file);

    noteActive.url = fileUrl;
    dispatch(startSaveNote(noteActive));
    Swal.close();
  }
}

export const startDeleteNotes = (id) => {
  

  return async (dispatch, getState) => {

    try {
      const { uid } = getState().auth;
      await db.doc(`${uid}/journal/notes/${id}`).delete();
      dispatch(deleteNote(id))
    
    } catch (error) {
      console.log(error);
    }
  }
} 

export const deleteNote = (id) =>({
  type: types.notesDelete,
  payload: id
}); 

export const cleanNotesLogout = () => ({
  type: types.notesLogoutCleaning
});