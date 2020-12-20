import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

describe('reducers/authReducer', () => {

    
    test('should to return an object with uid and name', () => {
        const action={
            type: types.logout   
        }

        const state=authReducer({}, action);

        expect(state).toEqual({});
    });

    test('should to return an empty object', () => {
        const action={
            type: types.login,
            payload: {
                uid: 'AR632504',
                name: 'Jesus',
            }
        }

        const state=authReducer({}, action);

        expect(state).toEqual({ 
            uid: 'AR632504',
            name: 'Jesus',
        });
    })
    
    
})