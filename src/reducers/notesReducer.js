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

const initialState = {
    notes: [],
    noteActive: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}