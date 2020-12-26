import { db } from "../firebase/firebase-config"
//import { noteStore } from "./data";


export const loadNotes = async (uid) => {
    //get all notes
   const notesSnap = await db.collection(`/${uid}/journal/notes`).get();
   const notes = [];

   notesSnap.forEach( note => {
       notes.push({
           id: note.id,
           ...note.data(),
       });
   });
   
   return notes;
}