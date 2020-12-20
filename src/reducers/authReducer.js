
import { types } from "../types/types";
/* 
{
    uid: ygsgsusgss,
    name: 'jesus'
}
*/

export const authReducer=(state={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name
            }
        case types.logout:
            return {}
        default:
            return state;
    }
}