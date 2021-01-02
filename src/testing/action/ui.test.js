import { setError, removeError, uiStartLoading, uiFinishLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('ui actions', () => {
    test('should to add the actions', () => {
        const setErrorUi = setError('Hubo un Error');
        expect(setErrorUi).toEqual({
            type: types.uiSetError,
            payload: 'Hubo un Error'
        });

        const removeErrorUi = removeError();

        expect(removeErrorUi).toEqual({type: types.uiRemoveError});

        const startLoading = uiStartLoading();

        expect(startLoading).toEqual({
            type: types.uiStartLoading
        });

        const finishLoading = uiFinishLoading();

        expect(finishLoading).toEqual({
            type: types.uiFinishLoading
        });
        
    });
});