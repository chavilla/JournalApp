import { types } from "../types/types"

const initialState = {
    loading: false,
    msgError: null,
    x: -100,
}

export const uiReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }

        case types.uiStartLoading: 
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading: 
            return {
                ...state,
                loading: false
            }

        case types.showSidebar:
            return {
                ...state,
                x: 0
            }

        case types.hideSidebar:
            return {
                ...state,
                x: -100
            }

        default:
            return state;
    }
} 