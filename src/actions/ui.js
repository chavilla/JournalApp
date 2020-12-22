import { types } from "../types/types";

export const setError=(error)=>({
    type: types.uiSetError,
    payload: error
});

export const removeError=()=>({
    type: types.uiRemoveError 
});

export const uiStartLoading = () => ({
    type: types.uiStartLoading
});


export const uiFinishLoading = () => ({
    type: types.uiFinishLoading
});

export const showSidebar = () => ({
    type: types.showSidebar
});


export const hideSidebar = () => ({
    type: types.hideSidebar
});
