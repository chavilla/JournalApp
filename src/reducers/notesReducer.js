/*
{
    notes: [],
    noteActive: null
    noteActive:{ 
        id:'4h3j2h44hh',
        title: 'string',
        body: 'loem ipsum heptum',
        img: 'image.jpg',
        date: a date
    }
}
*/

import { types } from "../types/types";

const initialState = {
    notes: [],
    noteActive: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.notesActive:
            return {
                ...state,
                noteActive: {
                    ...action.payload,
                }
            }
        
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map( note => note.id === action.payload.id 
                    ?
                        action.payload.note
                    :
                        note
                    )
            }
        
        case types.notesDelete:
            return {
                ...state,
                noteActive:null,
                notes: state.notes.filter(note => note.id !== action.payload )
            }

        case types.notesLogoutCleaning:
            return initialState;

        case types.notesAddNew:
            return {
                ...state,
                notes: [ ...state.notes, action.payload ]
            }

        default:
            return state;
    }
}