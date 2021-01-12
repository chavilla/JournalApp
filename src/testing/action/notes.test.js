/*Aquí configuramos el mockStore para hacer pruebas  */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  activeNote,
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading,
} from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { initState } from "../../fixtures";
import { types } from "../../types/types";

// settings middlewares and mockstore
const middleware = [thunk];
const mockStore = configureStore(middleware);

// simulate the function uploadfile
jest.mock("../../helpers/fileUpload", () => ({
  fileUpload: jest.fn(() => {
    return "https://hola.com/cosa.jpg";
  }),
}));

// create the store
let store = mockStore(initState);

describe("description action notes", () => {
  // Clean the store before each testing
  beforeEach(() => {
    store = mockStore(initState);
    window.alert.mockClear()

  });

  test("startNewNote", async () => {
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
    const {
      auth: { uid },
    } = store.getState();
    await db.doc(`${uid}/journal/notes/${docId}`).delete();
  });

  test("StartLoadingNotes action ", async () => {
    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
      url: expect.any(String),
    };

    await store.dispatch(startLoadingNotes("AR632504"));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

   expect(actions[0].payload[0]).toEqual(expected);

  });

  test("startSaveNote action", async () => {
    const note = {
      id: "GK9EPnSdOMf1AiWtQdGS",
      title: "This is a title",
      body: "This is a body",
    };

    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesUpdate,
      payload: expect.any(Object),
    });

    const docRef = await db
      .doc(`AR632504/journal/notes/GK9EPnSdOMf1AiWtQdGS`)
      .get();

    expect(docRef.data().title).toBe(note.title);
  });

  test("startUploading update the activeNote", async () => {

    const noteActive = {
      id: 'GK9EPnSdOMf1AiWtQdGS',
      body: 'Body of active note',
      totle: 'Active',
      date: 1610055204690,
    }

    await store.dispatch(activeNote('GK9EPnSdOMf1AiWtQdGS', noteActive));
    const file = new File([], "picture.jpeg");
    await store.dispatch(startUploading(file));

    const docRef = await db.doc(`AR632504/journal/notes/GK9EPnSdOMf1AiWtQdGS`).get();

    expect(docRef.data()).toEqual({
      body: 'Body of active note',
      url: 'https://hola.com/cosa.jpg',
      title: 'Active',
      date: 1610055204690
    }); 

  });
});
