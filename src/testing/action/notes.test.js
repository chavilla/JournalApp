/*Aquí configuramos el mockStore para hacer pruebas  */

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startLoadingNotes, startNewNote } from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";

// Create a middleware
const middleware = [thunk];
//configure the store
const mockStore = configureStore(middleware);
// create the store
const store = mockStore({
  auth: {
    uid: "AR632504",
  },
});

describe("description action notes", () => {
  test("should ", async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
        type: types.notesAddNew,
        payload: {
          id: expect.any(String),
          title: "",
          body: "",
          date: expect.any(Number),
        },
    });

    const docId = actions[0].payload.id;
    const { auth : { uid } } = store.getState();    
    await db.doc(`${uid}/journal/notes/${docId}`).delete();

  });

  test('StartLoadingNotes action ', async() => {

    await store.dispatch(startLoadingNotes('AR632504'));
    const actions = store.getActions();
    
    console.log(actions);
  });
  

});
